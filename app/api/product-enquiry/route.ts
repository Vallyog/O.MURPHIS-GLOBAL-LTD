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

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const token = process.env.GOOGLE_APPS_SCRIPT_TOKEN;

  if (!scriptUrl || !token) {
    return Response.json(
      {
        error:
          "The enquiry email service is not configured. Please try again later.",
      },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(scriptUrl);
  } catch {
    return Response.json(
      { error: "The enquiry email service is configured incorrectly." },
      { status: 503 },
    );
  }

  if (
    endpoint.protocol !== "https:" ||
    endpoint.hostname !== "script.google.com" ||
    !endpoint.pathname.startsWith("/macros/s/") ||
    !endpoint.pathname.endsWith("/exec")
  ) {
    return Response.json(
      { error: "The enquiry email service is configured incorrectly." },
      { status: 503 },
    );
  }

  let scriptResponse: Response;
  try {
    scriptResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        token,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return Response.json(
      { error: "We couldn’t connect to the enquiry email service. Please try again." },
      { status: 502 },
    );
  }

  let scriptResult: unknown;
  try {
    scriptResult = await scriptResponse.json();
  } catch {
    console.error("Google Apps Script returned a non-JSON response", {
      status: scriptResponse.status,
    });
    return Response.json(
      {
        error:
          "The enquiry email service returned an unexpected response. Check that the Apps Script web app is deployed for public access.",
      },
      { status: 502 },
    );
  }

  if (
    !scriptResponse.ok ||
    !isRecord(scriptResult) ||
    scriptResult.ok !== true
  ) {
    console.error("Google Apps Script failed to send product enquiry", {
      status: scriptResponse.status,
    });
    const error =
      isRecord(scriptResult) && typeof scriptResult.error === "string"
        ? scriptResult.error
        : "We couldn’t send your enquiry. Please try again later.";
    return Response.json({ error }, { status: 502 });
  }

  return Response.json({ ok: true });
}
