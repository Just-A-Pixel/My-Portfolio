import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Greeting.module.css";

function Greeting() {
  return (
    <div>
      <motion.div
        className={styles.heading1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hello
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.7, type: "spring", bounce: 0.5 }}
        >
          .
        </motion.div>
      </motion.div>

      <motion.h5
        className={styles.subheading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        {" "}
        WELCOME TO MY
      </motion.h5>
      <motion.h1
        className={styles.heading2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        World
      </motion.h1>
    </div>
  );
}

export default Greeting;
