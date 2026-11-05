import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how O.MURPHIS GLOBAL LTD. handles information when you visit this website or contact the company.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="page-wrap">
          <Link className="policy-back" href="/">
            <Icon name="arrow-left" />
            Go back
          </Link>
          <header className="policy-heading">
            <p className="eyebrow">YOUR INFORMATION, HANDLED WITH CARE</p>
            <h1>Privacy policy</h1>
            <p>Last updated: 3 November 2026</p>
          </header>

          <article className="policy-content">
            <p>
              O.MURPHIS GLOBAL LTD. respects
              your privacy. This policy explains what information may be
              handled when you visit this website or contact us, why it is
              used, and the choices available to you.
            </p>
            <p className="policy-notice">
              This notice reflects the website as currently configured. The
              enquiry form is not connected to a submission service, so
              information entered in it is not sent to us. We will update this
              policy if that changes.
            </p>

            <section>
              <h2>1. Who we are</h2>
              <p>
                O.MURPHIS GLOBAL LTD. is a company based in Lagos, Nigeria. For
                privacy questions or requests, contact us using the details in
                the <a href="#contact">Contact us</a> section below.
              </p>
            </section>

            <section>
              <h2>2. Information we may handle</h2>
              <ul>
                <li>
                  <strong>Information you provide:</strong> if you contact us,
                  this may include your name, email address, phone number,
                  area of interest and the contents of your message.
                </li>
                <li>
                  <strong>Technical information:</strong> when you visit the
                  website, our hosting and security providers may process
                  information such as your IP address, browser and device
                  details, requested pages, referring page and access times in
                  routine server or security logs.
                </li>
                <li>
                  <strong>Third-party links:</strong> if you choose to open
                  services such as Google Maps or WhatsApp from this website,
                  those providers may receive information about your visit
                  under their own privacy policies.
                </li>
              </ul>
              <p>
                We do not currently use advertising or audience-measurement
                cookies or analytics tools on this website. Hosting or security
                services may use technologies necessary to deliver or protect
                the site.
              </p>
            </section>

            <section>
              <h2>3. How we use information</h2>
              <p>We may use information to:</p>
              <ul>
                <li>respond to enquiries and communicate with you;</li>
                <li>operate, maintain and protect this website;</li>
                <li>identify and address technical issues or misuse; and</li>
                <li>meet applicable legal and regulatory requirements.</li>
              </ul>
              <p>
                Where required by applicable data-protection law, our grounds
                for handling information may include your consent, our
                legitimate interests in operating the website and responding
                to requests, or compliance with a legal obligation.
              </p>
            </section>

            <section>
              <h2>4. Enquiries and service providers</h2>
              <p>
                The enquiry form currently checks required fields in your
                browser, but it does not transmit or store a submission because
                no form endpoint is configured. If we connect a form provider
                or endpoint in the future, the information you submit will be
                sent to that service so we can respond. We will update this
                policy to identify the relevant service and explain any
                material changes to how information is handled.
              </p>
              <p>
                We may allow service providers supporting website hosting,
                security, communications or a future enquiry service to handle
                information on our behalf. We may also disclose information
                where required by law or when reasonably necessary to protect
                our rights, users or services. We do not sell personal
                information.
              </p>
            </section>

            <section>
              <h2>5. International processing and retention</h2>
              <p>
                Our service providers may process information in countries
                outside Nigeria. Where this occurs, we will take steps required
                by applicable law to protect the information.
              </p>
              <p>
                We keep information only for as long as reasonably needed for
                the purposes described in this policy, including responding to
                you, maintaining security, resolving disputes and meeting
                legal obligations. Retention periods depend on the type of
                information and the reason it was collected.
              </p>
            </section>

            <section>
              <h2>6. Your choices and rights</h2>
              <p>
                Subject to applicable law, you may ask us for access to your
                personal information, request correction or deletion, object
                to or ask us to restrict certain processing, request a copy
                where a right to data portability applies, or withdraw consent
                where processing is based on consent. You may also have the
                right to complain to the relevant data-protection authority.
              </p>
              <p>
                To make a request, contact us using the details below. We may
                need to verify your identity before responding.
              </p>
            </section>

            <section>
              <h2>7. Security and children</h2>
              <p>
                We use reasonable measures intended to protect information
                handled through the website. No method of internet
                transmission or electronic storage can be guaranteed to be
                completely secure.
              </p>
              <p>
                This website is intended for a general business audience and
                is not directed to children. Please do not submit a child’s
                personal information through the website.
              </p>
            </section>

            <section>
              <h2>8. Changes to this policy</h2>
              <p>
                We may update this policy when our website, services or legal
                obligations change. The latest version and its effective date
                will appear on this page.
              </p>
            </section>

            <section id="contact">
              <h2>9. Contact us</h2>
              <p>
                For privacy questions or requests, contact O.MURPHIS GLOBAL
                LTD.:
              </p>
              <address>
                Shop 4, No. 34 Coker Street, Beside Union Bank Plc, Coker Bus
                Stop, Abule Ijesha, Lagos State, Nigeria
                <br />
                WhatsApp:{" "}
                <a href="https://wa.me/2348035812003">+234 803 581 2003</a>
              </address>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
