import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  const [active, setActive] = useState("home");

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="hero-wrapper">
      <div className="hero-card">
        {/* NAVBAR */}
        <div className="navbar">
          <div className="logo">KT</div>

          <div className="nav-links">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* <button className="btn-gradient">Subscribe</button> */}
        </div>

        {/* SOCIAL */}
        <div className="social">
          <span>Follow Me</span>

          <a href="https://github.com/kirtanThakkar2411" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/thakkar-kirtan" target="_blank">
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/kirtan_thakkar._.24?igsh=Y3hvdWdkbjVuZWt1"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        {/* CONTENT */}
        <div className="hero-content">
          <div className="hero-text">
            <p>
              Hi, I'm <span>Kirtan Thakkar</span>
            </p>

            <h1>
              My Personal Portfolio <br />
              Web <span>Developer</span>
            </h1>

            <p>
              I build modern, scalable and high-performance web applications
              using React, Shopify, and JavaScript.
            </p>

            <button
              className="btn-gradient"
              onClick={() => scrollToSection("projects")}
            >
              View Projects →
            </button>
          </div>

          <div className="hero-image">
            <div className="glow-border">
              <div className="glow-inner">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
