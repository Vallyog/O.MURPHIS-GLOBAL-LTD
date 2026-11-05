type ProductEnquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isProductEnquiry(value: unknown): value is ProductEnquiry {
  if (!isRecord(value)) return false;

  return (
    typeof value.name === "string" &&
    value.name.trim().length > 0 &&
    value.name.length <= 120 &&
    typeof value.email === "string" &&
    value.email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email) &&
    typeof value.phone === "string" &&
    value.phone.length <= 40 &&
    typeof value.message === "string" &&
    value.message.trim().length > 0 &&
    value.message.length <= 3000
  );
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON enquiry." }, { status: 415 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "The enquiry data is invalid." }, { status: 400 });
  }

  if (!isProductEnquiry(payload)) {
    return Response.json(
      { error: "Please check the required enquiry details and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.PRODUCT_ENQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return Response.json(
      {
        error:
          "Email delivery is not configured yet. Please contact us directly.",
      },
      { status: 503 },
    );
  }

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `New product enquiry from ${payload.name.trim()}`,
        text: [
          `Name: ${payload.name.trim()}`,
          `Email: ${payload.email.trim()}`,
          `Phone: ${payload.phone.trim() || "Not provided"}`,
          "",
          "Products requested:",
          payload.message.trim(),
        ].join("\n"),
      }),
    });
  } catch {
    return Response.json(
      { error: "We couldn’t connect to the email service. Please try again." },
      { status: 502 },
    );
  }

  if (!providerResponse.ok) {
    console.error("Product enquiry email delivery failed", {
      status: providerResponse.status,
    });
    return Response.json(
      { error: "We couldn’t send your enquiry. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
