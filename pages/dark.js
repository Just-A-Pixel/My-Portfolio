import React, { useState, useEffect } from "react";
import Curves from "../components/LottieAnimation/curves";
import styles from "../styles/Dark.module.scss";
import { motion } from "framer-motion";
import Name from "../components/dark/Name";
import Contacts from "../components/dark/Contacts";
import img from "../public/Github.svg";
import Image from "next/image";
import Email from "../components/dark/email";
import Intro from "../components/dark/intro";
import IntroPhone from "../components/dark/introPhone"
const para = {
  p1: `Hello! I am a Software Developer I have a serious passion for UI effects, creative animations, and quality user experience. 
    Recently dived into backend and felt equally passionate for building apis and scaling applications.`,
  p2: ` Well-organised person, problem solver and a prefinal year student at Vellore Institute of Technology.`,
  p3: `Interested in the web and working on ambitious projects with incredible people.`,
};

const Dark = () => {
  const [section, setSection] = useState("about");
  const [position, setPosition] = useState(0);
  const size = useWindowSize();
  const [width, setWidth] = useState(size.width);

  useEffect(() => {
    if (section == "contact") setPosition(-40);
    else if (section == "about") setPosition(0);
    else if (section == "work") setPosition(40);
  }, [section]);

 
  const a = {
    opacity: 1,
    y: 0,
  };

  const b = {
    opacity: 0,
  };
  return (
    <>
      <div className={styles.dark}>
        <Contacts />
        <div style={ size.width > 1220? {
          display:'flex',
          justifyContent: 'space-around',

        }: {
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Name />
          
        

          <IntroPhone para = {para} section = {section} a = {a} b = {b} width = {width}/>
          
        </div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={section == "contact" ? a : b}
          transition={{ delay: 0.5, duration: 0.4 }}
          style={{
            color: "white",
            marginRight: "80px",
            maxWidth: "600px",
            fontSize: "18px",
            textAlign: "start",
            position: "absolute",
            top: "100px",
            right: "30px",
          }}
        >
          {/* <Email /> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={section == "work" ? a : b}
          transition={{ delay: 0.5, duration: 0.4 }}
          style={{
            color: "white",
            marginRight: "80px",
            maxWidth: "600px",
            fontSize: "18px",
            textAlign: "start",
            position: "absolute",
            top: "100px",
            right: "30px",
          }}
        >
          <Email />
        </motion.div>

        {/* <h6>dawdadawdwa</h6> */}

        <div>
          <Curves section={section} />
          <div
            style={{
              display: "flex",
              color: "white",
              justifyContent: "space-around",
              marginBottom: "0px",
              listStyle: "none",
              position: "relative",
              top: "-50px",
              // bottom: "100px",
              transform: `translateX(${position}vw)`,
              transition: "600ms ease-out",
            }}
          >
            <motion.li
              initial={{ opacity: 0, y: "60px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              onClick={() => setSection("work")}
              style={{ cursor: "pointer" }}
            >
              Contact
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: "60px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              onClick={() => setSection("about")}
              style={{ cursor: "pointer" }}
            >
              About
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: "60px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              onClick={() => setSection("contact")}
              style={{ cursor: "pointer" }}
            >
              My Work (Under Construction)
            </motion.li>
          </div>
        </div>
      </div>
    </>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Dark;
