import "./style.css";

import logo from "../../assets/img/logo-leo.png";

export default function Logo() {
  return (
    <aside className="logo">
        <img src={logo} alt="logo" />
    </aside>
  );
}
