import "./Navbarstyles.css";

import { useState } from "react";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const toggleSidebar = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar">
      <a href="/">
        <img src={"/images/Logo.png"} alt="logo" />
      </a>
      <h1>SkiQuizz</h1>
      <div>
        <ul
          id="navbar-urls"
          className={clicked ? "#navbar-urls show" : "#navbar-urls"}
        >
          <li>
            <a href="/" className="active">
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <a href="/"> Start </a>
          </li>
          <li>
            <a href="/"> Rules </a>
          </li>
          <li>
            <a href="/"> Leader Board </a>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <i
          id="bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={toggleSidebar}
        ></i>
      </div>
    </nav>
  );
}
