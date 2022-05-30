import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
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
      <nav
        className={`mobile-nav ${openMenu ? "" : "closed"}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {content}
      </nav>
      <button
        className="mobile-nav__button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <FontAwesomeIcon icon={faX} size="lg" color="white" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
        )}
      </button>
    </>
  );
};

type Props = {
  items: NavItem[];
  className?: string;
};

export default MobileNavigation;
