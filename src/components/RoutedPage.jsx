import { MessageCircle, Phone } from "lucide-react";
import logo from "../assets/images/avantetek_logo.png";
import { pageDetails, process, services } from "../data/siteData";
import ContactForm from "./ContactForm";
import PageHero from "./PageHero";
import ServiceCard from "./ServiceCard";

function RoutedPage({ pathname, onNavigate }) {
  const details = pageDetails[pathname] || pageDetails["/services"];
  return (
    <main className="page-main">
      <PageHero {...details} />
      {pathname === "/services" && (
        <section className="section">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>
      )}
      {pathname === "/about" && (
        <section className="about-section routed-about">
          <div className="about-image">
            <div className="image-orbit orbit-one" />
            <div className="image-orbit orbit-two" />
            <div className="about-mark">
              <img src={logo} alt="" />
            </div>
            <span className="image-label">AT / 2026</span>
          </div>
          <div className="about-content">
            <p className="eyebrow">
              <span /> Our approach
            </p>
            <h2>
              People are
              <br />
              <em>the point.</em>
            </h2>
            <p className="lead">
              Recruitment should be more than a transaction. It should be a
              relationship built on clarity, trust and a genuine belief in what
              people can achieve.
            </p>
            <p>
              We bring market knowledge, thoughtful conversations and a
              relentless focus on the right fit to every search. Our work is
              measured by the quality of the connection and the progress it
              creates.
            </p>
          </div>
        </section>
      )}
      {pathname === "/process" && (
        <section className="section">
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <div className="process-step" key={number}>
                <span>{number}</span>
                <div className="process-rule" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {pathname === "/contact" && (
        <section className="contact-section routed-contact">
          <div className="contact-copy">
            <p className="eyebrow light">
              <span /> Let&apos;s talk
            </p>
            <h2>
              Start a<br />
              <em>conversation.</em>
            </h2>
            <p>
              Tell us a little about what you&apos;re building. We&apos;ll bring
              the right questions.
            </p>
            <div className="contact-details">
              <a href="mailto:info@avantetek.com">
                <MessageCircle size={18} /> info@avantetek.com
              </a>
              <a href="tel:+919313935507">
                <Phone size={18} /> +91 931 393 5507
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      )}
    </main>
  );
}

export default RoutedPage;
