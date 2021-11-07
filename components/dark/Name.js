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
      <br/>
      <motion.h6 initial={{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 0.5, delay: 2.3}} className={`${styles.neonText}`} style={{fontSize: '20px', textAlign: 'left', position: 'absolute'}}>FullStack Developer</motion.h6>

    </motion.div>
   
  )
}

export default Name;
