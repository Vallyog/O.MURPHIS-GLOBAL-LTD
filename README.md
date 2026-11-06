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

The product enquiry form submits to a server-side route, which forwards
validated submissions to a Google Apps Script web app. Configure
`GOOGLE_APPS_SCRIPT_URL` with the deployed `/exec` URL and
`GOOGLE_APPS_SCRIPT_TOKEN` with the same long random token stored in the
Apps Script project's Script Properties. Set both variables in `.env.local`
for local development and in the deployment environment. Deploy the Apps
Script to execute as its owner and allow public access. It sends mail through
the owner's Google account using `MailApp`.

The route checks the Apps Script response and reports delivery failures to the
visitor rather than showing a false success. Do not expose the shared token in
client-side code or commit it.

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
