import {
  ArrowUpRight,
  Globe2,
  MessageCircle,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logo from "../assets/images/avantetek_logo.png";
import { process, services } from "../data/siteData";
import ContactForm from "./ContactForm";
import ServiceCard from "./ServiceCard";

function HomePage({ onNavigate }) {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-scene" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-orbit-core" />
          <div className="hero-float-card hero-float-card-top">
            <span className="float-card-dot" />
            <span>Talent intelligence</span>
          </div>
          <div className="hero-float-card hero-float-card-bottom">
            <strong>01</strong>
            <span>Human-led<br />search</span>
          </div>
        </div>
        <div className="hero-content">
          <p className="eyebrow light">
            <span /> People. Potential. Progress.
          </p>
          <h1>
            Better people.
            <br />
            <em>Brighter</em> business.
          </h1>
          <p className="hero-copy">
            We find the people who move businesses forward. Smart, human
            recruitment for ambitious teams across India and beyond.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/contact"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/contact");
              }}
            >
              Find your next hire <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link light-link"
              href="/services"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/services");
              }}
            >
              Explore our services <MoveRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-side-note">
          <span>Based in India</span>
          <span className="note-line" />
          <span>Built for everywhere</span>
        </div>
        <div className="hero-stat">
          <strong>People-first</strong>
          <span>
            Recruitment that feels
            <br />
            different by design.
          </span>
        </div>
      </section>
      <section className="trust-strip">
        <span>Helping ambitious businesses build their edge</span>
        <div className="trust-items">
          <span>Technology</span>
          <span>Healthcare</span>
          <span>Engineering</span>
          <span>Professional services</span>
        </div>
      </section>
      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> What we do
            </p>
            <h2>
              Talent solutions
              <br />
              <em>with intent.</em>
            </h2>
          </div>
          <p className="heading-note">
            The right hire changes more than a headcount. It changes what your
            business can become.
          </p>
        </div>
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
      <section className="about-section" id="about">
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
            <span /> About Avante Tek
          </p>
          <h2>
            We see the person
            <br />
            behind the <em>resume.</em>
          </h2>
          <p className="lead">
            Recruitment should be more than a transaction. It should be a
            relationship built on clarity, trust and a genuine belief in what
            people can achieve.
          </p>
          <p>
            Avante Tek is a new-generation talent partner for companies ready to
            grow with purpose. We bring market knowledge, thoughtful
            conversations and a relentless focus on the right fit to every
            search.
          </p>
          <a
            className="text-link dark-link"
            href="/about"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/about");
            }}
          >
            More about our approach <MoveRight size={18} />
          </a>
          <div className="about-metrics">
            <div>
              <strong>01</strong>
              <span>
                Clear
                <br />
                communication
              </span>
            </div>
            <div>
              <strong>02</strong>
              <span>
                Thoughtful
                <br />
                matching
              </span>
            </div>
            <div>
              <strong>03</strong>
              <span>
                Long-term
                <br />
                partnerships
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="why-intro">
          <p className="eyebrow light">
            <span /> Why choose us
          </p>
          <h2>
            The advantage
            <br />
            is <em>human.</em>
          </h2>
          <p>
            We combine the pace of a specialist search firm with the care of a
            long-term partner.
          </p>
        </div>
        <div className="why-list">
          <div>
            <Sparkles />
            <div>
              <h3>Quality over quantity</h3>
              <p>
                Every introduction is intentional. We only put forward people we
                genuinely believe in.
              </p>
            </div>
          </div>
          <div>
            <Globe2 />
            <div>
              <h3>Local insight, global reach</h3>
              <p>
                Deep market understanding, connected to a wider world of
                opportunity.
              </p>
            </div>
          </div>
          <div>
            <ShieldCheck />
            <div>
              <h3>Trust, earned daily</h3>
              <p>
                Honest advice and clear communication from brief to beyond the
                placement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section process-section" id="process">
        <div className="section-heading process-heading">
          <div>
            <p className="eyebrow">
              <span /> Our process
            </p>
            <h2>
              Simple by design.
              <br />
              <em>Serious about results.</em>
            </h2>
          </div>
          <p className="heading-note">
            No black boxes. No buzzwords. Just a clear, considered way to get
            the right people in the right seats.
          </p>
        </div>
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
      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow light">
            <span /> Let&apos;s talk
          </p>
          <h2>
            Ready to find
            <br />
            <em>what&apos;s next?</em>
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
              <Phone size={18} /> +91 7984988513
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

export default HomePage;
