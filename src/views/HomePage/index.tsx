import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CtaButton from "components/CtaButton";
import TestSocials from "components/TestSocials";

import "./index.scss";

const HomePage = () => {
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
  ];

  return (
    <article className="home">
      <div className="contanier home__contanier">
        <div className="contanier__content">
          <h3>Hello. I'm</h3>
          <h1>Boris Simic</h1>
          <h4 className="text-light">Front-end Developer</h4>
          <CtaButton />
          <TestSocials className="home__socials" items={socialsItems} />
        </div>

        <div className="home__image_contanier">
          <img src="./pictures/Me.png" alt="me" />
        </div>
      </div>
    </article>
  );
};

export default HomePage;
