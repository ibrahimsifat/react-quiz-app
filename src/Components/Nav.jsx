import React from "react";
import Logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Accounts";
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
      <Account />
    </nav>
  );
};

export default Nav;
