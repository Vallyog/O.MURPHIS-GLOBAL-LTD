import Image from "next/image";
import { QuoteForm } from "@/components/quote-form";
import { SiteHeader } from "@/components/site-header";
import { Icon } from "@/components/icon";
import { company, potentialServices } from "@/lib/site-config";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    alt: "Construction crew working at a large building site; representative stock photography.",
    label: "Building & construction",
    className: "gallery-image--wide",
  },
  {
    src: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=85",
    alt: "Heavy construction machinery at work; representative stock photography.",
    label: "Heavy machinery",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    alt: "Construction site activity; representative stock photography.",
    label: "Project support",
    className: "",
  },
];

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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=90"
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
              <a className="button button--yellow" href="#contact">
                Discuss a project <Icon name="arrow-down" />
              </a>
              <a className="button button--outline-light" href="#services">
                Explore our capabilities
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
              <p className="eyebrow">A COMPANY BUILT AROUND POSSIBILITY</p>
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
                Tell us what you’re planning
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
          className="services-section section-pad"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="page-wrap">
            <div className="section-heading section-heading--light">
              <div className="section-label section-label--light">
                <span className="section-label__number"></span>
                <span>What we do</span>
              </div>
              <div className="section-heading__main">
                <p className="eyebrow eyebrow--yellow">CAPABILITIES</p>
                <h2 id="services-title">
                  The right support
                  <br />
                  <span>for the work ahead.</span>
                </h2>
                <p className="section-heading__note">
                  Potential service categories — please confirm and edit before
                  publishing.
                </p>
              </div>
            </div>

            <div className="services-grid">
              {potentialServices.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top">
                    <span className="service-card__index">
                      0{index + 1} / 06
                    </span>
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-card__status">
                    UNCONFIRMED SERVICE AREA
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="gallery-section section-pad"
          id="equipment"
          aria-labelledby="gallery-title"
        >
          <div className="page-wrap">
            <div className="gallery-heading">
              <div>
                <div className="section-label">
                  <span className="section-label__number"></span>
                  <span>Equipment & capability</span>
                </div>
                <p className="eyebrow">A CLOSER LOOK</p>
                <h2 id="gallery-title">
                  Ready for the
                  <br />
                  <span>work in front of you.</span>
                </h2>
              </div>
              <p className="gallery-heading__copy">
                Representative imagery only. It does not show confirmed
                O.MURPHIS equipment, inventory or completed work.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure
                  className={`gallery-card ${image.className}`}
                  key={image.src}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 760px) 100vw, 66vw"
                        : "(max-width: 760px) 100vw, 33vw"
                    }
                  />
                  <span className="gallery-card__number">
                    0{index + 1} / IMAGE
                  </span>
                  <figcaption>
                    <span>{image.label}</span>
                    <span className="gallery-card__caption-note">
                      Illustrative photography
                    </span>
                  </figcaption>
                </figure>
              ))}
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
                <span>Selected work</span>
              </div>
              <p className="eyebrow eyebrow--yellow">PROJECT PORTFOLIO</p>
              <h2 id="projects-title">
                Work worth
                <br />
                <span>showing.</span>
              </h2>
              <p>
                We look forward to sharing approved project stories as our
                portfolio is confirmed.
              </p>
              <a className="button button--outline-light" href="#contact">
                Reach Out To Us <Icon name="arrow-down" />
              </a>
            </div>
            <div className="project-empty">
              <div className="project-empty__graphic" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="project-empty__label">
                PROJECT SHOWCASE
              </span>
              <h3>Portfolio coming soon</h3>
            </div>
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
            <p className="approach-note">
              Proposed working principles — confirm internally before
              publishing as company commitments.
            </p>
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
              <p className="eyebrow eyebrow--yellow">LET’S BUILD MOMENTUM</p>
              <h2 id="contact-title">
                Have a project
                <br />
                <span>in mind?</span>
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
                      <p className="contact-placeholder">
                        Email address
                      </p>
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
                <span>PROJECT ENQUIRY</span>
                <span>01 — 03</span>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap">
          <div className="footer-main">
            <a className="brand brand--footer" href="#home" aria-label="O.Murphis Global home">
              <span className="brand__mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="brand__text">
                <strong>O.MURPHIS</strong>
                <span>GLOBAL LTD.</span>
              </span>
            </a>
            <p>
              Building progress.
              <br />
              Powering possibilities.
            </p>
            <a className="footer-top-link" href="#home">
              BACK TO TOP <Icon name="arrow-up" />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© O.MURPHIS GLOBAL LTD. All rights reserved.</span>
            <span>LAGOS, NIGERIA</span>
            <span>BUILDING · CONSTRUCTION · HEAVY MACHINERY</span>
          </div>
        </div>
      </footer>
    </>
  );
}
