export default function About() {
  const stats = [
    { value: "1", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "500+", label: "☕Cups of Coffee" },
    { value: "10+", label: "🧠 Skills Learned" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        {/* LEFT SIDE */}
        <div className="about-left">
          <p className="about-tag">• ABOUT ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="about-desc">
            I’m a passionate Web Developer with expertise in building
            responsive, user-friendly, and performance-driven web applications.
            I love turning ideas into real products.
          </p>

          <button className="btn-gradient">Download CV</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-cards">
          {stats.map((item, i) => (
            <div key={i} className="about-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
