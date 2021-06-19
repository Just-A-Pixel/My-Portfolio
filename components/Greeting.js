import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Greeting.module.css";

function Greeting() {
  return (
    <div>
      <div className={styles.heading1}>
        Hello
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.7, type: "spring", bounce: 0.5 }}
        >
          .
        </motion.div>
      </div>

      <motion.h5
        className={styles.subheading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        {" "}
        WELCOME TO MY
      </motion.h5>
      <h1 className={styles.heading2}>World</h1>
    </div>
  );
}

export default Greeting;
