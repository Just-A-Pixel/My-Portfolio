import React from "react";
import { motion } from "framer-motion";
import GitHub from "../components/LottieAnimation/GitHub";
import styles from "../styles/Main.module.css";
import Linkedin from "../components/LottieAnimation/Linkedin";
import WebAnimation from "../components/LottieAnimation/webAnimation";
import { iconListAnimation } from "../animations/mainAnimation";
function main() {
  return (
    <>
      <div className={styles.about} style={{ overflowY: "hidden" }}>
        {/* Changing below style to css class causes bugs */}
        <motion.div
          variants={iconListAnimation}
          initial="initial"
          animate="animate"
          className={styles.icons}
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "9px",
            marginTop: "50px",
          }}
        >
          <motion.div
            initial={{ transform: "rotate(360deg)" }}
            animate={{ transform: "rotate(0deg)" }}
            transition={{ duration: 1 }}
          >
            <GitHub />
          </motion.div>
          <br />

          <motion.div
            initial={{ transform: "rotate(360deg)" }}
            animate={{ transform: "rotate(0deg)" }}
            transition={{ duration: 1 }}
          >
            <Linkedin />
          </motion.div>
        </motion.div>
        {/* DO NOT TOUCH THIS LINE*/}
        <div className={styles.titleRight2}>
          {/* Flex */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <WebAnimation />
            </motion.div>
      
            <motion.div
              initial={{ transform: "scaleY(0)" }}
              animate={{ transform: "scaleY(1)" }}
              transition={{ duration: 1, delay: 1 }}
              className={styles.intro}
            >
              <motion.h3
                initial = {{transform: 'translateY(2000px)', opacity: '0'}}
                animate = {{transform: 'translateY(0px)', opacity: '1', ease: 'easeOut'}}
                transition={{duration: 1.5, delay: 2}}
              >I am</motion.h3>
              <motion.h1
                initial = {{transform: 'translateY(2000px)', opacity: '0'}}
                animate = {{transform: 'translateY(0px)', opacity: '1', ease: 'easeOut'}}
                transition={{duration: 1.5, delay: 2.2}}
              >Raj Anand</motion.h1>
              <motion.h4
              initial = {{transform: 'translateY(2000px)', opacity: '0'}}
              animate = {{transform: 'translateY(0px)', opacity: '1', ease: 'easeOut'}}
              transition={{duration: 1.5, delay: 2.4}}
              >Fullstack developer</motion.h4>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default main;
