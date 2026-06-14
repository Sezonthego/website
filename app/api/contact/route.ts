import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  role?: string;
  message?: string;
};

const roleLabels: Record<string, string> = {
  site: "Site",
  cro: "CRO",
  sponsor: "Sponsor",
  other: "Other",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const role = body.role?.trim() || "other";
  const message = body.message?.trim() || "(No message provided)";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@weforgeclinical.pl";
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "WeForge Website <onboarding@resend.dev>";
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  const roleLabel = roleLabels[role] ?? role;
  const subject = `Weforge lead: ${name} (${roleLabel})`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Role: ${roleLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const errors: string[] = [];

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      errors.push(
        typeof err.message === "string" ? err.message : "Email delivery failed."
      );
    }
  }

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        role: roleLabel,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      errors.push("Webhook delivery failed.");
    }
  }

  if (!resendKey && !webhookUrl) {
    console.info("[contact] Lead received (configure RESEND_API_KEY or CONTACT_WEBHOOK_URL):", {
      name,
      email,
      role: roleLabel,
      message,
    });
    return NextResponse.json({
      ok: true,
      message:
        "Submission received. Configure RESEND_API_KEY or CONTACT_WEBHOOK_URL to deliver leads to your inbox.",
    });
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
