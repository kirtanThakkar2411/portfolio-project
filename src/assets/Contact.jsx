import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0s8x8pw", // replace
        "template_uo8gs3p", // replace
        form,
        "KurePdUWP0cRgOvMG", // replace
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-tag">• CONTACT</p>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p className="contact-desc">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:kirtanthakkar16@gmail.com">
                kirtanthakkar16@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917778012416">+91 7778012416</a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="contact-form glass" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-gradient">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
