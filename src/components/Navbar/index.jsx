import "./style.css";

import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <Logo />
      </Link>

      <div className="links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Entrar</NavLink>
        <NavLink to={"/register"}>Registrar</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
      </div>
    </nav>
  );
}
