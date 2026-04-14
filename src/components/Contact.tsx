import "./styles/Contact.css";
import { MdArrowOutward, MdCopyright } from "react-icons/md";

const WHATSAPP_NUMBER = "923294963776"; // used for WhatsApp only (phone not displayed)

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>04 Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:imransabir2005@gmail.com" data-cursor="disable">
                imransabir2005@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Lahore, Punjab, Pakistan</p>

            <h4 style={{ marginTop: 18 }}>WhatsApp</h4>
            <p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Imran, I want to discuss a project."
                )}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Message on WhatsApp <MdArrowOutward />
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Socials</h4>
            <a
              href="https://www.instagram.com/cybernaticdream?igsh=aTE2ZWtsbDhsNmxx"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-sabir-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.tiktok.com/@cybernetic_dream?_r=1&_t=ZS-95MHRW2EZy4"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              TikTok <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Imran Sabir</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <p style={{ marginTop: 12, opacity: 0.85 }}>
              Built with React  Deployed on Vercel
              <br />
              Pro themes  Pro cursor  WhatsApp contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
