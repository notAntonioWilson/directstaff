// Posts form submissions to the Make.com webhook.
// The `tag` field ("hiring" or "get_hired") drives the Make router that fans out
// to the notification emails (Antonio + owner) and the applicant/client email.
// Resume handling is Option A: filename only, the file itself is not transmitted.

const WEBHOOK_URL = "https://hook.us2.make.com/cj2wp0d3ljnnal6tkkgd9torym4kgh5l";

export type SubmitResult = "ok" | "error";

export async function submitToWebhook(
  payload: Record<string, unknown>
): Promise<SubmitResult> {
  try {
    const params = new URLSearchParams();
    Object.entries({
      ...payload,
      submitted_at: new Date().toISOString(),
    }).forEach(([key, value]) => {
      params.append(key, value == null ? "" : String(value));
    });

    // Sent form-encoded so Make parses each field into its own mappable item
    // (no JSON-blob dissecting needed). This is a CORS "simple request",
    // so it avoids a preflight that some webhook endpoints reject.
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
    });

    return res.ok ? "ok" : "error";
  } catch {
    return "error";
  }
}
