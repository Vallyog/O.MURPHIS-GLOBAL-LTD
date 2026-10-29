# O.MURPHIS GLOBAL LTD.

Responsive corporate website for O.MURPHIS GLOBAL LTD., built with Next.js App
Router, TypeScript, and CSS. The site intentionally avoids unverified company,
equipment, project, contact, and credential claims.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content and contact configuration

Edit [`lib/site-config.ts`](./lib/site-config.ts) to update the company contact
details and service categories:

- `contact.phone` and `contact.email` are blank until verified.
  `contact.whatsappPhone` is set to the provided WhatsApp number; formatting is
  stripped when building the `wa.me` link.
- The service categories are explicitly marked as potential/unconfirmed on
  the site. Confirm them before presenting them as active company services.
- Replace representative Unsplash photography with approved company imagery
  when available. Current images are illustrative and are not presented as
  company-owned equipment or completed work.

## Connecting the enquiry form

The quote form validates required fields in the browser. It does not claim
success or transmit enquiry details while `company.formEndpoint` is blank.
Configure that value with the public URL of a real form service or a
server-side endpoint that accepts a JSON `POST` containing `name`, `email`,
`phone`, `service`, and `message`. The form only displays success after the
endpoint returns an HTTP success status; non-success responses and connection
failures are shown to the visitor.

For production, use an endpoint you control or a reputable form provider, add
server-side validation and spam protection, configure its allowed origins and
data-retention policy, and avoid putting private API keys in this client-side
configuration. If the provider requires a secret, proxy submissions through a
server-side route and keep the secret in deployment environment variables.

## Check and build

```bash
npm run lint
npm run build
npm run start
```

Deploy to a Node.js host that supports Next.js. Build with `npm run build`, then
start the production server with `npm run start`. Configure the form endpoint
and verified public contact details before publishing.
# O.MURPHIS-GLOBAL-LTD
