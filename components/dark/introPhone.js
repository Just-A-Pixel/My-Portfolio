import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import styles from '../../styles/Components/Dark/intro.module.scss'

const Intro = ({section, a , b, para}) => {

  const size = useWindowSize();
  const [width, setWidth] = useState(useWindowSize().width);
    // useEffect( (
    //   console.log(width)
    // ), [])

if(size.width > 1220) {
  return (
    <motion.div
            className={styles.test}
            initial={{ opacity: 0, y: 50 }}
            animate={section == "about" ? a : b}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{
              color: "white",
              marginRight: "80px",
              maxWidth: "500px",
              fontSize: "18px",
              textAlign: "start",
              position: "relative",
              top: "50px"
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
  )
}
  else return (
        <motion.div
            className={styles.test}
            initial={{ opacity: 0, y: 50 }}
            animate={section == "about" ? a : b}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={
              {
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
    )
}

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
export default Intro
