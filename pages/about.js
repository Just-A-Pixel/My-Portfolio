import React from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
function test() {
  return (
    <>
      {/* Left side */}
      <div className={styles.about} style={{ overflowY: "hidden" }}>
        <div className={styles.titleLeft}>
          <motion.h1
            className={styles.leftText}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "backIn",
              type: "spring",
              duration: 1,
            }}
          >
            I
          </motion.h1>
          <motion.h1
            className={styles.leftText}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "backIn",
              type: "spring",
              duration: 1,
              delay: 0.2,
            }}
          >
            AM A
          </motion.h1>
          <motion.h1
            className={styles.leftText}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "backIn",
              type: "spring",
              duration: 1,
              delay: 0.4,
            }}
          >
            STUDENT
          </motion.h1>
        </div>

        <div className={styles.titleRight}>
          <div className={styles.innerContainer}>
            <h1 className={styles.rightText}>AND</h1>
            <h1 className={styles.rightText}>A </h1>
            <h1 className={styles.rightText}>DEVELOPER</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default test;
