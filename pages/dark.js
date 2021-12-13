import React, { useState, useEffect } from "react";
import Curves from "../components/LottieAnimation/curves";
import styles from "../styles/Dark.module.scss";
import { motion } from "framer-motion";
import Name from "../components/dark/Name";
import Contacts from "../components/dark/Contacts";
import img from "../public/Github.svg";
import Image from "next/image";
import Email from "../components/dark/email";

const para = {
  p1: `I am a Full-Stack developer located in India. I have a serious passion for UI effects, creative animations, and quality user experience. 
    Recently dived into backend and felt equally passionate for building apis and scaling applications.`,
  p2: ` Well-organised person, problem solver and a prefinal year student at Vellore Institute of Technology.`,
  p3: `Interested in the web and working on ambitious projects with incredible people.`,
};

const Dark = () => {
  const [section, setSection] = useState("about");
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(120);
  useEffect(() => {
    if (section == "contact") setPosition(-40);
    else if (section == "about") setPosition(0);
    else if (section == "work") setPosition(40);
  }, [section]);

  useEffect(() => { 
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
      setWidth(window.innerWidth);
    });
    window.addEventListener("load", () => {
      console.log(window.innerHeight, window.innerWidth);
      setWidth(window.innerWidth);
    });
    return (
      window.removeEventListener("resize", () => {
        console.log(window.innerHeight, window.innerWidth);
        setWidth(window.innerWidth);
      }),

      window.removeEventListener("load", () => {
        console.log(window.innerHeight, window.innerWidth);
        setWidth(window.innerWidth);
      })
    )
  }, []);
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
        <div style={ width > 1220? {
          display:'flex',
          justifyContent: 'space-between',

        }: {
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Name />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section == "about" ? a : b}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={width > 1220?{
              color: "white",
              marginRight: "80px",
              maxWidth: "500px",
              fontSize: "18px",
              textAlign: "start",
              // marginTop: "500px",
              position: "relative",
              top: "50px",
              // right: "0px",
            }:{
              color: "white",
              // marginRight: "80px",
              maxWidth: "500px",
              fontSize: "18px",
              textAlign: "center",
              // marginTop: "500px",
              position: "relative",
              top: "50px",
              // right: "0px",
            }}
          >
            <p>
              {para.p1}
              <br />
              <br />
              {para.p2}

              <br />
              <br />
              {para.p3}
            </p>
          </motion.div>
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
          <Email />
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

        <h6>dawdadawdwa</h6>

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
      </div>
    </>
  );
};

export default Dark;
