import Logo from "components/Logo";
import MobileNavigation from "components/MobileNavigation";
import Navigation from "components/Navigation";
import "./index.scss";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="header">
      <Logo />
      <Navigation className="header__navigation" items={navItems} />
      <MobileNavigation items={navItems} />
    </div>
  );
};

export default Header;
