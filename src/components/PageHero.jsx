function PageHero({ label, title, intro }) {
  return (
    <section className="inner-hero">
      <div className="hero-grid" />
      <div className="hero-content">
        <p className="eyebrow light">
          <span /> {label}
        </p>
        <h1>{title}</h1>
        <p className="hero-copy">{intro}</p>
      </div>
    </section>
  );
}

export default PageHero;
