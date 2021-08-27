import React, { useState } from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import Arrow from "../components/LottieAnimation/Test";
import { useRouter } from "next/router";
// import Link from "next/link";

const leftAnimation = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate1: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
    },
  },
  animate2: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  animate3: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.4,
    },
  },

  exitanimate1: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
    },
  },
  exitanimate2: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  exitanimate3: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.4,
    },
  },
};

const rightAnimation = {
  initial: {
    backgroundPosition: "1000px ",
    filter: "hue-rotate(-50deg)",
  },
  animate: {
    backgroundPosition: `-100px`,
    filter: "hue-rotate(0deg)",
    transition: {
      delay: 1.5,
      duration: 1.8,
    },
  },
};

const About = () => {
  const [change, setChange] = useState(false);
  const [exit, setExit] = useState(false);
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const updatePage = () => {
    setChange(true);
    setTimeout(function () {
      setExit(true);
    }, 1000);
    setTimeout(function() {
      setDisable(true);
    }, 2500)
    setTimeout(function () {
      router.push('/main')
    }, 3000);
  };

  return (
    <>
      {/* Left side */}
      <div
        className={styles.about}
        style={change ? {} : { overflowY: "hidden" }}
      >
        <motion.div className={exit ? styles.titleLeftExit : styles.titleLeft} >
          <motion.h1
            className={styles.leftText}
            variants={leftAnimation}
            initial="initial"
            animate={change ? "exitanimate1" : "animate1"}
          >
            I
          </motion.h1>

          <motion.h1
            className={styles.leftText}
            variants={leftAnimation}
            initial="initial"
            animate={change ? "exitanimate2" : "animate2"}
          >
            AM A
          </motion.h1>

          <motion.h1
            className={styles.leftText}
            variants={leftAnimation}
            initial="initial"
            animate={change ? "exitanimate3" : "animate3"}
          >
            STUDENT
          </motion.h1>
        </motion.div>

        <motion.div
          className={change ? styles.titleRight2 : styles.titleRight}
          //   style={change ? { backgroundColor: "#40D9EA" } : {}}
          variants={rightAnimation}
          initial="initial"
          animate="animate"
        >
          <div className={styles.innerContainer}>
            <motion.h1
              className={styles.rightText}
              animate={change ? { opacity: 0, y: -100 } : {}}
            >
              AND
            </motion.h1>
            <motion.h1
              className={styles.rightText}
              animate={change ? { opacity: 0, y: -100 } : {}}
              transition={{ delay: 0.2 }}
            >
              A{" "}
            </motion.h1>
            <motion.h1
              className={styles.rightText}
              animate={change ? { opacity: 0, y: -100 } : {}}
              transition={{ delay: 0.4 }}
            >
              DEVELOPER
            </motion.h1>

            <div
              className={styles.button}
              style={
                change
                  ? { display: "none" }
                  : {
                      transform: "rotate(-90deg)",
                      padding: 0,
                      width: "100px",
                      position: "absolute",
                      right: "20px",
                      bottom: "10px",
                    }
              }
              onClick={() => updatePage()}
            >
              <Arrow />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
