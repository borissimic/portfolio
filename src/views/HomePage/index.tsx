import CtaButton from "components/CtaButton";
import HomeSocials from "components/HomeSocials";
import "./index.scss";

const HomePage = () => {
  return (
    <article className="home">
      <div className="contanier home__contanier">
        <div className="contanier__content">
          <h3>Hello. I'm</h3>
          <h1>Boris Simic</h1>
          <h4 className="text-light">Front-end Developer</h4>
          <CtaButton />
          <HomeSocials />
        </div>

        <div className="home__image_contanier">
          <img src="./pictures/Me.png" alt="me" />
        </div>
      </div>
    </article>
  );
};

export default HomePage;
