import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "components/Navigation";
import TestSocials from "components/TestSocials";

import "./index.scss";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const socialsItems = [
    {
      href: "https://linkedin.com",
      icon: <FontAwesomeIcon icon={faLinkedin} size="lg" color="blue" />,
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__test1">
        <TestSocials className="footer_socials" items={socialsItems} />
        {/* <Navigation className="footer_nav" items={navItems} /> */}
      </div>
      <h5 className="footer__text">Made by Boris Simic 2022</h5>
    </footer>
  );
};

export default Footer;
