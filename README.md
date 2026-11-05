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
- The product showcase displays 18 supplied photos from `public/projects/` in
  a swipeable carousel. It does not assign product names or make claims about
  the images.

## Connecting the enquiry form

The product enquiry form submits to a server-side route that sends email using
Resend. Copy `.env.example` to `.env.local`, set `RESEND_API_KEY` from your
Resend account, and replace `RESEND_FROM_EMAIL` with an address on a domain
verified with Resend. `PRODUCT_ENQUIRY_TO_EMAIL` is set to the supplied
recipient address; update it if needed. Add the same variables to the
deployment environment. Never expose the Resend API key in client-side code.

The route validates submitted fields on the server and reports delivery
failures to the visitor instead of showing a false success.

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
