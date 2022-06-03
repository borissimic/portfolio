import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Socials from "components/Socials";

import "./index.scss";

const Footer = () => {
  const socialsItems = [
    {
      href: "https://linkedin.com",
      icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
    },
    {
      href: "https://facebook.com",
      icon: <FontAwesomeIcon icon={faFacebook} size="lg" />,
    },
    {
      href: "https://github.com",
      icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
    },
    {
      href: "mailto:borissimic99@yahoo.com",
      icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
    },
  ];

  return (
    <footer className="footer">
      <Socials className="footer__socials" items={socialsItems} />
      <h5 className="footer__text">Made by Boris Simic 2022</h5>
    </footer>
  );
};

export default Footer;
