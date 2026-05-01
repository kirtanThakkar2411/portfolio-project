import ecommerce from "../assets/e-commerce_.png";
import blinkit from "../assets/blinkit.png";
import shopify from "../assets/shopify.png";
import porfolio from "../assets/portfolio.png";
import skola from "../assets/skola.png";
import fx2funding from "../assets/fx2funding.png";

export default function Projects() {
  const projects = [
    {
      img: ecommerce,
      title: "E-Commerce Platform",
      desc: "Amazon-style shopping platform with cart, checkout & authentication.",
      tech: ["React", "HTML5", "TailwindCSS"],
    },
    {
      img: blinkit,
      title: "Blinkit Clone",
      desc: "Grocery delivery app with real-time cart & category filtering.",
      tech: ["HTML5", "JavaScript", "CSS"],
    },
    {
      img: shopify,
      title: "Shopify Custom Store",
      desc: "Custom product pages, bundles & UI optimization.",
      tech: ["Shopify", "Liquid"],
    },
    {
      img: porfolio,
      title: "Portfolio website",
      desc: "Personal portfolio website",
      tech: ["HTML5", "React", "CSS", "TailwindCSS"],
    },
    {
      img: skola,
      title: "Sakola website",
      desc: "Education website for school",
      tech: ["HTML5", "javascript", "CSS", "jquery"],
    },
    {
      img: fx2funding,
      title: "Fx2-Funding website",
      desc: "Trading website for Traders",
      tech: ["HTML5", "javascript", "CSS", "jquery"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* HEADER */}
        <div className="projects-header">
          <div>
            <p className="projects-tag">• PROJECTS</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>

          <button className="btn-gradient">View All</button>
        </div>

        {/* CARDS */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              {/* IMAGE */}
              <div className="project-img">
                <img src={p.img} alt={p.title} />
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
