import React from "react";
import Logo from "../assets/images/logo-bg.png";
import Accounts from "./Accounts";
import classes from "./Styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt="Learn with Sifat Logo" />
            <h3>Learn with Sifat</h3>
          </a>
        </li>
      </ul>
      <Accounts />
    </nav>
  );
};

export default Nav;
