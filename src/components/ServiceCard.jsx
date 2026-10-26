import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, onNavigate }) {
  const { number, icon: Icon, title, text, tags } = service;
  return (
    <article className="service-card">
      <div className="card-top">
        <span className="card-number">{number}</span>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tag-row">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        className="card-link"
        href="/contact"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("/contact");
        }}
      >
        Learn more <ArrowUpRight size={17} />
      </a>
    </article>
  );
}

export default ServiceCard;
