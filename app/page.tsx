import Image from "next/image";
import { ProjectShowcase } from "@/components/project-showcase";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Icon } from "@/components/icon";
import { company } from "@/lib/site-config";

const principles = [
  {
    number: "01",
    title: "Start with the brief",
    description:
      "Understand the scope, site conditions and priorities before recommending a way forward.",
  },
  {
    number: "02",
    title: "Keep it clear",
    description:
      "Make conversations about requirements, timing and next steps straightforward.",
  },
  {
    number: "03",
    title: "Think practically",
    description:
      "Focus on fit-for-purpose solutions that reflect the realities of each project.",
  },
  {
    number: "04",
    title: "Work as one team",
    description:
      "Coordinate openly with clients, contractors and other project stakeholders.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <Image
            className="hero__image"
            src="/projects/showcase-02.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__shade" />
          <div className="hero__content page-wrap">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" />
              O.MURPHIS GLOBAL LTD. <span className="eyebrow__dot">/</span>{" "}
              LAGOS, NIGERIA
            </p>
            <h1 id="hero-title">
              Building Progress.
              <br />
              <span>Powering Possibilities.</span>
            </h1>
            <p className="hero__intro">
              A Lagos-based company operating across building, construction and
              heavy machinery.
            </p>
            <div className="hero__actions">
              <a className="button button--yellow" href="https:wa.me/+2347036212091">
                Reach Out To Us!
              </a>
            </div>
          </div>
          <div className="hero__bottom page-wrap" aria-hidden="true">
            <span>Built for what comes next</span>
            <span className="hero__scroll">
              SCROLL TO EXPLORE <span className="hero__scroll-line" />
            </span>
          </div>
          <span className="hero__index" aria-hidden="true">
            01 — 06
          </span>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="page-wrap intro-grid">
            <div className="section-label">
              <span className="section-label__number"></span>
              <span>About us</span>
            </div>
            <div className="intro-copy">
              <p className="eyebrow">A BUSINESS BUILT AROUND CONSTRUCTION</p>
              <h2>
                Ambition deserves
                <br />
                <span>the right foundation.</span>
              </h2>
              <p className="body-copy">
                O.MURPHIS GLOBAL LTD. is a private limited company based in
                Lagos, Nigeria, operating in the building, construction and
                heavy machinery sectors. We are shaping a focused,
                project-minded business for clients with work to get moving.
              </p>
              <a className="text-link" href="#contact">
                Tell us what you need?
              </a>
            </div>
            <div className="intro-aside">
              <span className="intro-aside__mark" aria-hidden="true">
                OM
              </span>
              <p>
                Local perspective.
                <br />
                Forward-thinking work.
              </p>
              <span className="intro-aside__location">
                <Icon name="pin" /> LAGOS, NIGERIA
              </span>
            </div>
          </div>
        </section>

        <section
          className="projects-section section-pad"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="page-wrap projects-layout">
            <div className="projects-intro">
              <div className="section-label section-label--light">
                <span className="section-label__number"></span>
                <span>Our Products</span>
              </div>
              <p className="eyebrow eyebrow--yellow">Check Out</p>
              <h2 id="projects-title">
                What WE
                <br />
                <span>Sell . . .</span>
              </h2>
              <p>
                These are some of the products we sell. We have a wide range of products to choose from. If you don't see what you're looking for, please contact us and we will be happy to help you find it.
              </p>
              <a className="button button--outline-light" href="#contact">
                Reach Out To Us <Icon name="arrow-down" />
              </a>
            </div>
            <ProjectShowcase />
          </div>
        </section>

        <section
          className="approach-section section-pad"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="page-wrap">
            <div className="approach-heading">
              <div className="section-label">
                <span className="section-label__number"></span>
                <span>Why O.Murphis?</span>
              </div>
              <div>
                <p className="eyebrow">HOW WE APPROACH THE WORK</p>
                <h2 id="approach-title">
                  Built on the way
                  <br />
                  <span>good work gets done.</span>
                </h2>
              </div>
            </div>
            <div className="principles-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section
          className="contact-section section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="page-wrap contact-layout">
            <div className="contact-copy">
              <div className="section-label section-label--light">
                <span className="section-label__number"></span>
                <span>Get in touch</span>
              </div>
              <p className="eyebrow eyebrow--yellow">Have a Product in Mind?</p>
              <h2 id="contact-title">
                Reach Out 
                <br />
                <span>To Us.</span>
              </h2>
              <p className="contact-copy__intro">
                Share a few details and start a conversation with our team.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <span className="contact-detail__label">LOCATION</span>
                    <a
                      className="contact-location-link"
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${company.location} in Google Maps`}
                    >
                      {company.location}
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <span className="contact-detail__label">PHONE</span>
                    {company.contact.phone ? (
                      <a href={`tel:${+2348035812003}`}>
                        {company.contact.phone}
                      </a>
                    ) : (
                      <a href="tel:+2348035812003"><p className="contact-placeholder">
                        +2348035812003
                      </p></a>
                    )}
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <span className="contact-detail__label">EMAIL</span>
                    {company.contact.email ? (
                      <a href={`mailto:${company.contact.email}`}>
                        {company.contact.email}
                      </a>
                    ) : (
                      <a href="mailto:murphis80@yahoo.com"><p className="contact-placeholder">
                        murphis80@yahoo.com
                      </p></a>
                    )}
                  </div>
                </div>
              </div>
              {company.contact.whatsappPhone ? (
                <a
                  className="whatsapp-link"
                  href={`https://wa.me/${company.contact.whatsappPhone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="message" /> Chat with us on WhatsApp

                </a>
              ) : (
                <p className="whatsapp-pending">
                  WhatsApp contact details to be confirmed
                </p>
              )}
            </div>
            <div className="contact-form-wrap">
              <div className="contact-form-heading">
                <span>PRODUCT ENQUIRY</span>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
