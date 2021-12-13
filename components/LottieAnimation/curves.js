import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "./curves.json";
import { motion } from "framer-motion";

function Curves({ section }) {
  // const [flag, setFlag] = useState(true);
  const [scale, setScale] = useState(0);
  const [pos, setPos] = useState(0);
  

  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.setSpeed(0.5);
    setTimeout(function () {
      setScale(0.4);
    }, 200);
    
  }, []);

  useEffect(() => {
    if (section == "work") {
      setPos(50);
    }
    else if(section == "contact")
      setPos(-50);
    else setPos(0)
  }, [section])

  // useEffect(() => {
  //   console.log(flag);
  //   if (flag) {
  //     lottieRef.current.setDirection(1);
  //   } else if (flag) {
  //     lottieRef.current.setDirection(-1);
  //     // lottieRef.current.goToAndPlay(0)
  //   }
  // }, [flag]);

  // lottieRef.current.pause();
  return (
    <Lottie
      lottieRef={lottieRef}
      // onLoopComplete={() => setFlag(!flag)}
      animationData={animation}
      style={{
        maxWidth: "1500px",
        margin: "auto",
        marginTop: '50px',
        // marginBottom: '10vh',
        opacity: 0.9,
        
        //   cursor: "pointer",
        transform: `scaleY(${scale}) translateX(${pos}vw) `,
        transition: "1500ms",
      }}
    />
  );
}

export default Curves;
