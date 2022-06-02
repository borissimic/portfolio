import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeSocials from "components/HomeSocials";
import Navigation from "components/Navigation";

import "./index.scss";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://github.com" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
      <Navigation className="footer_nav" items={navItems} />
      <span className="footer__text">Made by Boris Simic 2022</span>
    </footer>
  );
};

export default Footer;
