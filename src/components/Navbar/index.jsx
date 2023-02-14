import "./style.css";
import Logo from "../Logo";

import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuthValue();

  return (
    <nav>
      <Link to={"/"}>
        <Logo />
      </Link>

      <div className="links">
        <NavLink to={"/"}>Home</NavLink>
        {!user && (
          <Fragment>
            <NavLink to={"/login"}>Entrar</NavLink>
            <NavLink to={"/register"}>Registrar</NavLink>
          </Fragment>
        )}
        {user && (
          <Fragment>
            <NavLink to={"/posts/create"}>Novo post</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </Fragment>
        )}
        <NavLink to={"/about"}>Sobre</NavLink>
      </div>
    </nav>
  );
}
