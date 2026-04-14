import { useEffect } from "react";
import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

// Simplified navbar without GSAP trial plugins.
// Uses native anchor scrolling.

const Navbar = () => {
  useEffect(() => {
    // Ensure page always starts at top
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
      <div className="header">
        <a href="#landingDiv" className="navbar-title" data-cursor="disable">
          Imran Sabir
        </a>
        <a
          href="mailto:imransabir2005@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          imransabir2005@gmail.com
        </a>
        <ul>
          <li>
            <a href="#about" data-href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work" data-href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a href="#contact" data-href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
