import React from "react";
import { motion } from "framer-motion";
import GitHub from "../components/LottieAnimation/GitHub";
import styles from "../styles/Main.module.css";
import Linkedin from "../components/LottieAnimation/Linkedin";
function main() {
  return (
    <>
      <div className={styles.about} style={{ overflowY: "hidden" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "9px",
            marginTop: '50px'
          }}
        >
          <GitHub />
          <br/>
          <Linkedin />
        </div>
        {/* DO NOT TOUCH THIS LINE*/}
        <div className={styles.titleRight2}></div>
      </div>
    </>
  );
}

export default main;
