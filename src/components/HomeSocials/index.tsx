import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeSocials = () => {
  return (
    <div className="home__socials">
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
  );
};
export default HomeSocials;
