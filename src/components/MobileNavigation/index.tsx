import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem } from "models/generic.model";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const MobileNavigation = ({ className = "", items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink key={name} to={path}>
      {name}
    </NavLink>
  ));

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className={`mobile-nav ${openMenu ? "" : "closed"}`}>{content}</nav>
      <button
        className="mobile-nav__button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" color="white" />
      </button>
    </>
  );
};

type Props = {
  items: NavItem[];
  className?: string;
};

export default MobileNavigation;
