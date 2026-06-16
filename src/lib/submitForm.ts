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
    const body = JSON.stringify({
      ...payload,
      submitted_at: new Date().toISOString(),
    });

    // Sent as text/plain to avoid a CORS preflight that some webhook
    // endpoints reject. Make parses the JSON body regardless of content-type.
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
    });

    return res.ok ? "ok" : "error";
  } catch {
    return "error";
  }
}
