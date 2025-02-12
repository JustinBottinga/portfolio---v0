import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, contactPreference } = await request.json();

    const data = await resend.emails.send({
      from: "portfolio@justinbottinga.com",
      to:
        contactPreference === "justin"
          ? "jbottinga@outlook.com"
          : "justin@grufix.nl",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Contact Preference: ${contactPreference}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
