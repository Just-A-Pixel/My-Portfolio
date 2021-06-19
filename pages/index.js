import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

let close = "/DoorClose.svg";
let open = "/DoorOpen2.svg";
export default function Home() {
  const [img, setImg] = useState(close);
  const [exit, setExit] = useState(false);
  const router = useRouter();

  const openDoor = () => {
    setImg(open);
  };

  const pageTransition = () => {
    setExit(true)

    setTimeout(function() {
      router.push("/test")
    }, 1000);
  }

  return (
    <>
    <div className={styles.container} style={{overflowX:'hidden'}}>
      <Greeting />
      
      <AnimatePresence>
        <motion.img
          className={styles.door}
          src={img}
          height={300}
          width={300}
          onMouseOver={() => openDoor()}
          onMouseLeave={() => setImg(close)}
          onClick={() => pageTransition()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          exit={{opacity: 0}}
        />
      </AnimatePresence>

      <h5 className={img == open ? styles.title : styles.hide}>ENTER</h5>

      
    </div>
    <div style={exit?{position: 'absolute', width: '100vw', height: '100vw', zIndex: 100, bottom: '0', left: '0', background: 'white', transition: '1000ms', borderTopRightRadius: '80%' }:{position: 'absolute',width: '0%', height: '0vw', transition: '1000ms', background: 'white'}}>      </div>
{/* <div style={!exit?{position: 'absolute', width: '100px', height: '100px', zIndex: 100, top: 0}:{ width: '100vw', height: '1000vw', background: 'white', transition: '100ms'}}>        </div>

    </> */}
    </>
    
  );
}
