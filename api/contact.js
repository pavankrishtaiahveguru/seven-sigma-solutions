import { Resend } from "resend";
console.log("RESEND_API_KEY exists:", Boolean(process.env.RESEND_API_KEY));
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const { name, email, phone, service, message } = req.body || {};

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "7Sigma Solutions <onboarding@resend.dev>",
      to: ["sigma7tech@outlook.com"],
      replyTo: email,
      subject: `New Contact Inquiry - ${service}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>New Contact Inquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f8fafc;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e2e8f0;
              "
            >
              <div
                style="
                  background: #0f172a;
                  padding: 28px;
                  text-align: center;
                "
              >
                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 24px;
                  "
                >
                  7Sigma Solutions
                </h1>

                <p
                  style="
                    margin: 8px 0 0;
                    color: #94a3b8;
                    font-size: 13px;
                  "
                >
                  New Contact Inquiry
                </p>
              </div>

              <div style="padding: 30px;">
                <h2
                  style="
                    margin: 0 0 20px;
                    color: #2563eb;
                    font-size: 20px;
                  "
                >
                  Contact Details
                </h2>

                <div
                  style="
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 8px;
                    margin-bottom: 10px;
                  "
                >
                  <strong>Name</strong>
                  <br />
                  <span style="color: #475569;">
                    ${name}
                  </span>
                </div>

                <div
                  style="
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 8px;
                    margin-bottom: 10px;
                  "
                >
                  <strong>Email</strong>
                  <br />
                  <a
                    href="mailto:${email}"
                    style="
                      color: #2563eb;
                      text-decoration: none;
                    "
                  >
                    ${email}
                  </a>
                </div>

                <div
                  style="
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 8px;
                    margin-bottom: 10px;
                  "
                >
                  <strong>Phone</strong>
                  <br />
                  <span style="color: #475569;">
                    ${phone || "Not provided"}
                  </span>
                </div>

                <div
                  style="
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 8px;
                    margin-bottom: 24px;
                  "
                >
                  <strong>Service</strong>
                  <br />
                  <span style="color: #475569;">
                    ${service}
                  </span>
                </div>

                <h2
                  style="
                    margin: 0 0 12px;
                    color: #2563eb;
                    font-size: 20px;
                  "
                >
                  Message
                </h2>

                <div
                  style="
                    padding: 18px;
                    background: #f8fafc;
                    border-left: 4px solid #2563eb;
                    border-radius: 6px;
                    color: #475569;
                    line-height: 1.7;
                  "
                >
                  ${message}
                </div>
              </div>

              <div
                style="
                  padding: 20px 30px;
                  border-top: 1px solid #e2e8f0;
                  text-align: center;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #94a3b8;
                    font-size: 12px;
                  "
                >
                  This message was submitted through the
                  7Sigma Solutions website.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Failed to send your message.",
      });
    }

    console.log("Email sent successfully:", data?.id);

    return res.status(200).json({
      success: true,
      message:
        "Thank you for contacting 7Sigma Solutions. Your message has been sent successfully.",
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        "Unable to send your message right now. Please try again later.",
    });
  }
}
