import Image from "next/image";
import { Plus } from "lucide-react";
import { agency } from "@/lib/agency";
import "./hero.css";
import { GlossyStar } from "./glossy-star";
import { AmbientMotion } from "./ambient-motion";
import { HeroAtom } from "./hero-atom";
import { HeroTap } from "./hero-tap";
import { AboutGlass } from "./about-glass";
import { BrandLogo } from "./brand-logo";
import { ContactActions } from "./contact-actions";
import { ServiceDescription } from "./studio";
import { SocialIcon } from "./social-icon";
import { FooterLandscape } from "./footer-landscape";

export function Hero() {
  return (
    <section id="about" className="four-hero light-section" aria-labelledby="hero-heading">
      <HeroTap />
      <div className="page-width four-hero-inner">
        <h1 id="hero-heading" className="about-statement">Design and development, <span>working together from the first brief.</span></h1>
        <div className="about-panels">
          <div className="about-panel about-panel--orange">
            <AboutGlass />
            <GlossyStar className="about-spark" />
            <p>From the first sketch to the final cut,<br /> <span className="about-connected-line">the idea stays connected.</span></p>
          </div>
          <div className="about-panel about-panel--brand">
            <BrandLogo />
            <div>
              <h3>One team from<br />brief to build.</h3>
              <p>Design, video, and development in one team.</p>
            </div>
          </div>
          <div className="about-panel about-panel--disciplines">
            <AboutGlass tone="neutral" />
            <svg className="about-question" viewBox="0 0 106 132" aria-hidden="true" focusable="false">
              <defs>
                <path id="four-question-shape" d="M13 41C12 19 28 7 50 7c23 0 39 13 39 33 0 16-10 25-19 33-8 7-13 12-13 21v2H35v-5c0-15 8-24 18-33 8-7 13-12 13-19 0-8-6-13-16-13-10 0-16 6-16 15Z M56 114a10 10 0 1 1-20 0 10 10 0 1 1 20 0Z" />
                <linearGradient id="four-question-face" x1="0" x2="1" y2="1">
                  <stop stopColor="#353535" />
                  <stop offset=".28" stopColor="#a1a1a1" />
                  <stop offset=".47" stopColor="#515151" />
                  <stop offset=".73" stopColor="#777777" />
                  <stop offset="1" stopColor="#3c3c3c" />
                </linearGradient>
                <linearGradient id="four-question-edge" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#bababa" />
                  <stop offset=".4" stopColor="#575757" />
                  <stop offset="1" stopColor="#090909" />
                </linearGradient>
              </defs>
              <use href="#four-question-shape" transform="translate(6.5 4)" fill="#424242" stroke="#424242" strokeWidth="3" strokeLinejoin="round" />
              <use href="#four-question-shape" transform="translate(3.25 2)" fill="#707070" stroke="#656565" strokeWidth="2" />
              <use href="#four-question-shape" fill="url(#four-question-face)" stroke="url(#four-question-edge)" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M17 33C20 18 34 11 49 11m-10 102c1-3 3-5 7-6" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" opacity=".55" />
            </svg>
            <h3>Start where you are.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="services light-section section-space" aria-labelledby="services-heading">
      <div className="page-width">
        <h2 id="services-heading">Our <span>Services</span></h2>
        <div className="services-layout">
          <p className="services-lead">From the first sketch to the finished screen.</p>
          <div className="service-list">
            {agency.services.map((service, index) => (
              <details key={service.id} className="service" name="services" open={index === 0}>
                <summary>
                  <span className="service-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <Plus className="service-toggle" size={20} aria-hidden="true" />
                </summary>
                <div className="service-body">
                  <ServiceDescription text={service.description} />
                  <ul aria-label={`${service.title} capabilities`}>
                    {service.deliverables.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <AmbientMotion className="services-art"><HeroAtom /></AmbientMotion>
        </div>
      </div>
    </section>
  );
}

export function SelectedWork() {
  if (!agency.projects.length) return null;
  return <section id="work" className="light-section section-space" aria-labelledby="work-heading"><div className="page-width"><h2 id="work-heading">Ideas, out in the world.</h2><div className="work-grid">{agency.projects.map((project) => <a className="work-item" key={project.title} href={project.href}><Image src={project.image} alt={project.imageAlt} width={1200} height={900} sizes="(max-width: 700px) 100vw, 50vw" /><div><h3>{project.title}</h3></div><p>{project.discipline}</p></a>)}</div></div></section>;
}

export function Process() {
  return <section id="process" className="process light-section section-space" aria-labelledby="process-heading"><div className="page-width">
    <div className="process-heading"><h2 id="process-heading">A clear path.<br />Room for good ideas.</h2></div>
    <ol className="process-list">{agency.process.map((step, index) => <li key={step.title}><span className="process-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
  </div></section>;
}

export function Contact() {
  return (
    <section id="contact" className="contact section-space" aria-labelledby="contact-heading">
      <div className="page-width contact-layout">
        <div className="contact-intro">
          <h2 id="contact-heading">Got a spark?<br />Let’s give<br />it a shape.</h2>
          <p>A new brand, a better website, a story to tell, or an app taking shape. Start with what you have in mind.</p>
          {agency.contact.email && <a className="contact-email" href={"mailto:" + agency.contact.email}>{agency.contact.email}</a>}
        </div>
        <div className="four-contact-note">
          <h3>Start with your project</h3>
          <p>Tell us what you have in mind. Send a brief, a question, or a link to what you’re working on.</p>
          <ContactActions />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="page-width footer-top">
          <div className="footer-brand-group">
            <a className="brand-link" href="#top" aria-label="4our home"><BrandLogo outlined /></a>
            <p>© 4our. All rights reserved.</p>
          </div>
          <div className="footer-social-group">
            <ul className="footer-socials" aria-label="Social media">
              {agency.socials.map(({ name, label, href }) => (
                <li key={name}>
                  {href ? (
                    <a href={href} aria-label={label}><SocialIcon name={name} /></a>
                  ) : (
                    <span role="img" aria-label={label}><SocialIcon name={name} /></span>
                  )}
                </li>
              ))}
            </ul>
            <p>Design. Edit. Develop.</p>
          </div>
        </div>
      </div>
      <FooterLandscape />
    </footer>
  );
}
