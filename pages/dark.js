import React, { useState, useEffect } from "react";
import Curves from "../components/LottieAnimation/curves";
import styles from "../styles/Dark.module.css";
import { motion } from "framer-motion";
import Name from "../components/dark/Name";
import Contacts from "../components/dark/Contacts";
import img from "../public/Github.svg";
import Image from "next/image";

const para = {
  p1: `I am a Full-Stack developer located in India. I have a serious passion for UI effects, creative animations, and quality user experience. 
    Recently dived into backend and felt equally passionate for building apis and scaling applications.`,
  p2: ` Well-organised person, problem solver and a prefinal year student at Vellore Institute of Technology.`,
  p3: `Interested in the web and working on ambitious projects with incredible people.`,
};

const Dark = () => {
  const [section, setSection] = useState("about");
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (section == "contact") setPosition(-40);
    else if (section == "about") setPosition(0);
    else if (section == "work") setPosition(40);
  }, [section]);
  return (
    <>
      <div className={styles.dark}>
        <Contacts />
        <div style={{ display: "flex" }}>
          <Name />
          <div style={{ color: "white", marginRight: "80px", maxWidth: '600px', fontSize: '18px', textAlign: 'start', position: 'relative', top: '100px'  }}>
            <p>
              I am a Full-Stack developer located in India. I have a serious
              passion for UI effects, creative animations, and quality user
              experience. Recently dived into backend and felt equally
              passionate for building apis and scaling applications.
              <br /><br />
              Well-organised person, problem solver and a prefinal year student
              at Vellore Institute of Technology.
              <br /><br />
              Interested in the web and working on ambitious projects with
              incredible people.
            </p>
          </div>
        </div>

        <Curves section={section} />

        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "space-around",
            listStyle: "none",
            position: "relative",
            top: "-90px",
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
            My Work
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
            Contact
          </motion.li>
        </div>
      </div>
    </>
  );
};

export default Dark;
