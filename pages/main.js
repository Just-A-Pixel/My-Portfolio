import React, {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHub from "../components/LottieAnimation/GitHub";
import styles from "../styles/Main.module.css";
import Linkedin from "../components/LottieAnimation/Linkedin";
import WebAnimation from "../components/LottieAnimation/webAnimation";
import { iconListAnimation } from "../animations/mainAnimation";
import dark from "../public/darkTransition.png";
import router from "next/router";
const Main = () => {
  const [trigger, setTrigger] = useState(false)

  const darkMode = () => {
    setTrigger(true)
    setTimeout(function () {
      router.push("/dark");
    }, 1000);
  };

  return (
    <div className = {styles.main}>
      <div className={styles.about}>
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
            marginTop: "50px"
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
          <div className={styles.main__content}>
            <motion.div
              className={styles.web__animation}
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
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2 }}
              >
                I am
              </motion.h3>
              <motion.h1
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2.2 }}
              >
                Raj Anand
              </motion.h1>
              <motion.h4
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2.4 }}
              >
                Fullstack developer
              </motion.h4>
            </motion.div>
          </div>

          <motion.h2
            onClick={() => darkMode()}
            className={styles.darkModeButton}
            style={{  textAlign: "center" }}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition={{delay: 4}}
          >
            Enter dark mode 
          </motion.h2>
        </div>
      </div>
      
{/* Transition */}
<div  style={trigger?{textAlign: "center", position: 'absolute', width: '2000px', height: '2000px', background: '#0c0c0c' ,left: '50%', transform: 'translateX(-50%)', top: '-60%', transition: '1000ms', borderRadius: '100%' }:{borderRadius: '100%' ,width: '0', height: '0', transition: '1000ms',background: 'black',fontSize: "50px", textAlign: "center", position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%' }}></div>
          
    </div>
  );
}

export default Main;
