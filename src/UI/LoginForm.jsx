import React from "react";
import { motion } from "framer-motion";

import classes from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={classes.Mdiv}>
      <div className={classes.formdiv}>
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
            loop: Infinity,
          }}
          className={classes.titlecard}
          alt="titlecard"
          src={require("../Media/titlecard.png")}
        />
        <div className={classes.formC1}>
          <label>Username</label>
          <input className={classes.inputbox} />
        </div>
        <div className={classes.formC1}>
          <label>Password</label>
          <input className={classes.inputbox} />
        </div>
        <button className={classes.formbutton}><span>Login</span></button>
      </div>
    </div>
  );
}

export default LoginForm;
