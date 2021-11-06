import React from "react";
import styles from "../../styles/Components/Dark/name.module.scss";
import {motion} from "framer-motion"
const Name = () => {
  return (

    <motion.div initial={{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 0.5, delay: 1.7}} className={styles.dark__name}>
      <span className={`${styles.neonText} ${styles.pulsate}`}>
        R<span className={styles.flicker2}>a</span>j
      </span>
      <br />
      <span className={`${styles.neonText} ${styles.pulsate}`}>
        Ana<span className={styles.flicker}>n</span>d
      </span>
    </motion.div>
   
  )
}

export default Name;
