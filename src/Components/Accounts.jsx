import React from "react";
import classes from "../styles/Account.module.css";
const Accounts = () => {
  return (
    <div>
      <div className={classes.account}>
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
    </div>
  );
};

export default Accounts;
