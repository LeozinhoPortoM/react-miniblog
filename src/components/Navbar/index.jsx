import "./style.css";

import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <Logo />
      </Link>

      <div className="search">
        <input type="search" name="search" />
      </div>

      <div className="links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  );
}
