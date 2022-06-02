import { NavItem } from "models/generic.model";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navigation = ({ className = "", items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink className={className} key={name} to={path}>
      {name}
    </NavLink>
  ));

  return <nav className="navigation footer__navigation">{content}</nav>;
};

type Props = {
  items: NavItem[];
  className?: string;
};

export default Navigation;
