// Posts form submissions through our own /api/submit relay, which forwards to
// the Make webhook server-side. The `tag` field ("hiring" or "get_hired") drives
// the Make router. Resume is sent as filename + base64 of the file.

export type SubmitResult = "ok" | "error";

// Reads a File into a base64 string (no data: prefix), for sending through the webhook.
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(new Error("file read failed"));
    reader.readAsDataURL(file);
  });
}

export async function submitToWebhook(
  payload: Record<string, unknown>
): Promise<SubmitResult> {
  try {
    // Posts to our own same-origin API route, which relays to Make.
    // Same-origin avoids the CORS/size limits that dropped the base64 resume
    // on a direct cross-origin POST. The server forwards each field to Make.
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submitted_at: new Date().toISOString(),
      }),
    });

    return res.ok ? "ok" : "error";
  } catch {
    return "error";
  }
}
