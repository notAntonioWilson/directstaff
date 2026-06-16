import { NextRequest, NextResponse } from "next/server";

// Server-side relay to the Make webhook.
// The browser posts JSON here (same-origin: no CORS/size limits). The server
// then forwards to Make as multipart/form-data. Text fields go as normal fields,
// and the resume is DECODED from base64 into a real binary file and attached as
// an actual file upload, so Make receives a genuine file (no toBinary / decode
// step needed in the scenario; just attach the received file directly).

const WEBHOOK_URL = "https://hook.us2.make.com/cj2wp0d3ljnnal6tkkgd9torym4kgh5l";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mimeFromName(name: string): string {
  const ext = name.toLowerCase().split(".").pop() || "";
  if (ext === "pdf") return "application/pdf";
  if (ext === "doc") return "application/msword";
  if (ext === "docx")
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (ext === "txt") return "text/plain";
  if (ext === "rtf") return "application/rtf";
  return "application/octet-stream";
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Record<string, unknown>;

    const form = new FormData();

    // All text fields (everything except the base64 blob) go as plain fields.
    for (const [key, value] of Object.entries(data)) {
      if (key === "resume_base64") continue;
      form.append(key, value == null ? "" : String(value));
    }

    // Decode the resume base64 into a real file and attach it as "resume".
    const base64 = typeof data.resume_base64 === "string" ? data.resume_base64 : "";
    const filename =
      typeof data.resume_filename === "string" && data.resume_filename
        ? data.resume_filename
        : "resume";

    if (base64) {
      const bytes = Buffer.from(base64, "base64");
      const blob = new Blob([bytes], { type: mimeFromName(filename) });
      form.append("resume", blob, filename);
    }

    // Do NOT set Content-Type manually; fetch sets the multipart boundary.
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
