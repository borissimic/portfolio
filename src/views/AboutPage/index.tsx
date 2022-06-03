import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "components/Socials";

import "./index.scss";

const AboutPage = () => {
  const socialsItems = [
    {
      href: "https://linkedin.com",
      icon: <FontAwesomeIcon icon={faLinkedin} size="lg" color="blue" />,
    },
  ];
  return (
    <div>
      <Socials items={socialsItems} />
    </div>
  );
};

export default AboutPage;
