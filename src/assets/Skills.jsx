import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaShopify,
  FaGitAlt,
  FaFigma,
  FaWordpress,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaShopify />, name: "Shopify" },
    { icon: <FaWordpress />, name: "WordPress" },

    // NEW SKILLS
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <FaDatabase />, name: "NoSQL" },

    { icon: <FaGitAlt />, name: "Git & GitHub" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-tag">• MY SKILLS</h2>

        <h2 className="skills-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
