import React from "react";
import LoginForm from "../UI/LoginForm";
import classes from "./Header.module.css"

function Header() {
  return (
    <div className={classes.headercointainer}>
      <LoginForm />
    </div>
  );
}

export default Header;
