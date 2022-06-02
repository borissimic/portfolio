import "./index.scss";

const CtaButton = () => {
  return (
    <div className="cta">
      <a href="/home" download className="btn">
        Download Cv
      </a>
      <a href="/contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CtaButton;
