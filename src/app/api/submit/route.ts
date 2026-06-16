import { NextRequest, NextResponse } from "next/server";

// Server-side relay to the Make webhook.
// The browser posts here (same-origin, so no CORS limits and no size issue with
// the base64 resume), and the server forwards the data to Make as form-encoded
// fields so each value lands as its own mappable item.

const WEBHOOK_URL = "https://hook.us2.make.com/cj2wp0d3ljnnal6tkkgd9torym4kgh5l";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const params = new URLSearchParams();
    Object.entries(data as Record<string, unknown>).forEach(([key, value]) => {
      params.append(key, value == null ? "" : String(value));
    });

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
