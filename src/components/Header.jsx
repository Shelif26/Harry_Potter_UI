import React from 'react'
import classes from './Header.module.css'
import {motion} from 'framer-motion'

function Header() {
  return (
    <>
    <div className={classes.imagediv}>
        <motion.img 
         whileHover={{
            scale: 2,
            rotate: [0, -10, 10, -10, 10, -10, 10, 0],
            transition: { duration: 1 },
            loop: Infinity}}className={classes.image} src={require("../UI/demontor.png")}/>
    </div>
        <div className={classes.imagediv}>
        <motion.img
              whileHover={{
                scale: 2,
                // rotate: [0, -10, 10, -10, 10, -10, 10, 0],
                transition: { duration: 0.5 },
                loop: Infinity}} className={classes.image2} src={require("../UI/demontor2.png")}/>
    </div> 
    </>
  )
}

export default Header