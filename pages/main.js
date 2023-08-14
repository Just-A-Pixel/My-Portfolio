import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHub from "../components/LottieAnimation/GitHub";
import styles from "../styles/Main.module.css";
import Linkedin from "../components/LottieAnimation/Linkedin";
import WebAnimation from "../components/LottieAnimation/webAnimation";
import { iconListAnimation } from "../animations/mainAnimation";
import dark from "../public/darkTransition.png";
import router from "next/router";
import Projects from "../components/Projects";
const Main = () => {
  const [trigger, setTrigger] = useState(false);

  const darkMode = () => {
    setTrigger(true);
    setTimeout(function () {
      router.push("/dark");
    }, 2000);
  };

  return (
    <div className={styles.main}>
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
          <div className={styles.main__content}>
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
                className="text-5xl font-extralight ml-[12px]"
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(10px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2 }}
              >
                I am
              </motion.h3>

              <motion.h2
                className="sm:text-[2em] my-[50px] font-semibold text-[1em]"
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(10px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2.2 }}
              >
                Raj Anand
              </motion.h2>
              <motion.h4
                className="mt-[10px]"
                initial={{ transform: "translateY(2000px)", opacity: "0" }}
                animate={{
                  transform: "translateY(10px)",
                  opacity: "1",
                  ease: "easeOut",
                }}
                transition={{ duration: 1.5, delay: 2.4 }}
              >
                Software Engineer
              </motion.h4>
            </motion.div>

            <br />
          </div>

          {/* Intro */}

          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="m-20 text-slate-50 text-3xl font-light tracking-wider leading-relaxed">
            Hello! I am Raj Anand, a Software Engineer from India. Previously interned as an SDE at Amazon and Growthschool. <br />I
            graduated in 2023 with a Bachelor's in Computer Science and
            Engineering from VIT, Vellore.
          </motion.div>

          <motion.h2 className="m-20 text-slate-50"
             initial={{ opacity: 0, x: -100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 2.8 }}
          > My Work </motion.h2>

          {/* <div className="m-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <Projects />
          </div> */}

          <motion.div className="m-20 flex flex-col flex-nowrap min-h-[400px] pt-10 gap-4 overflow-x-scroll sm:flex-col md:flex-row" 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.1 }}>
            <Projects />
          </motion.div>
            {/* <div className="m-20 border-2">dawdawdawaddw</div>
            <div className="m-20 border-2">dawdawdawaddw</div>
            <div className="m-20 border-2">dawdawdawaddw</div>
            <div className="m-20 border-2">dawdawdawaddw</div>
            <div className="m-20 border-2">dawdawdawaddw</div> */}
        </div>
        {/* <div  style={trigger?{textAlign: "center", position: 'absolute', width: '4000px', height: '4000px', background: '#0c0c0c' ,left: '50%', transform: 'translateX(-50%)', top: '-60vh', transition: '2000ms', borderRadius: '100%' }:{borderRadius: '100%' ,width: '0', height: '0', transition: '1000ms',background: 'black',fontSize: "50px", textAlign: "center", position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%' }}></div> */}
      </div>

      {/* Transition */}
    </div>
  );
};

export default Main;

{
  /* <motion.h2
              onClick={() => darkMode()}
              className={styles.darkModeButtonMobile}
              style={{  textAlign: "center" }}
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition={{delay: 4}}
            >
            Enter dark mode 
          </motion.h2> */
}

{
  /* <motion.h2
            onClick={() => darkMode()}
            className={styles.darkModeButton}
            style={{  textAlign: "center" }}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition={{delay: 4}}
          >
            Enter dark mode 
          </motion.h2> */
}
