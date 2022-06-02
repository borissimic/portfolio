import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestSocials from "components/TestSocials";

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
      <TestSocials items={socialsItems} />
    </div>
  );
};

export default AboutPage;
