import React, { useState, useRef, useEffect} from "react";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

let close = "/DoorClose.svg";
let open = "/DoorOpen2.svg";

export default function Home() {
  const [img, setImg] = useState(close);
  const [exit, setExit] = useState(false);
  const ref = useRef()
  const router = useRouter();

  const openDoor = () => {
    setImg(open);
  };

  const pageTransition = () => {
    setExit(true);

    setTimeout(function () {
      router.push("/about", "/");
      // router.push("/about");

    }, 1000);
  };

  useEffect(() => {
    console.log(ref.current.clientWidth)
    if(ref.current.clientWidth < 800){
      alert("Phone view under construction! Please use a laptop/desktop for an amazing experience, filled with my love to code :)")
    }
  })
  return (
    <div ref = {ref}>
      <Head>
        <title>Raj Anand</title>
      </Head>
      <div
        className={styles.container}
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
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
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>

        <h5 className={img == open ? styles.title : styles.hide}>ENTER</h5>

        {/* transition */}
        <div
          className={styles.circle}
          style={
            exit
              ? {
                  height: "1000px",
                  width: "1000px",
                  transform: "scale(2, 2)",
                  transition: "800ms",
                }
              : {}
          }
        ></div>
      </div>
    </div>
  );
}
