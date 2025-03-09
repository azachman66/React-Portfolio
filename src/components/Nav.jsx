import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="navLinks">
      <NavLink to="/">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav