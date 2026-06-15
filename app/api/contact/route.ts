import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  role?: string;
  message?: string;
  website?: string;
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
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
  
  if (body.website) {
    return NextResponse.json({ ok: true });
  }
 

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const role = body.role?.trim() || "other";
  const message = body.message?.trim() || "(No message provided)";
  if (message.length > 2000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }
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
  const subject = `Yuy! A new lead in the house "${name}"`;
  const text = [
    "Hello Weforge team,",
    "",
    "A new contact request was submitted through the website contact form.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization type: ${roleLabel}`,
    "",
    "Message:",
    message,
    "",

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
        html: `
          <div style="
            font-family: Arial, sans-serif;
            color: #0A0300;
            max-width: 560px;
            line-height: 1.6;
          ">
      
            <h2 style="
              font-size: 22px;
              font-weight: 600;
              margin-bottom: 24px;
            ">
              Contact form submission
            </h2>
      
            <div style="margin-bottom: 16px;">
              <div style="font-weight:600;">Name</div>
              <div>${name}</div>
            </div>
      
            <div style="margin-bottom: 16px;">
              <div style="font-weight:600;">Email</div>
              <div>${email}</div>
            </div>
      
            <div style="margin-bottom: 16px;">
              <div style="font-weight:600;">Organization type</div>
              <div>${roleLabel}</div>
            </div>
      
            <div style="margin-top:24px;">
              <div style="font-weight:600;">Message</div>
      
              <div style="
                margin-top:8px;
                padding:16px;
                border:1px solid #eee;
                background:#FFFEFA;
              ">
                ${message}
              </div>
            </div>
      
            <hr style="
              border:none;
              border-top:1px solid #eee;
              margin:32px 0;
            "/>
      
            <div style="
              font-size:12px;
              color:#666;
            ">
              Sent from the Weforge website contact form.<br/>
          
            </div>
      
          </div>
        `,
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
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>New Weforge website inquiry</h2>
      
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${roleLabel}</p>
      
            <hr />
      
            <p><strong>Message:</strong></p>
            <p>${message}</p>
      
            <br />
      
            <small>
              Sent automatically from the Weforge website contact form.
            </small>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      errors.push("Webhook delivery failed.");
    }
  }

  if (!resendKey && !webhookUrl) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
