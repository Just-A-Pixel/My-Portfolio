import React from "react";
import Lottie from "lottie-react";
import animation from "./linkedin.json";

const style = {
  width: "40px",

  cursor: "pointer",
};
function Linkedin() {
  return <Lottie animationData={animation} style={style} onClick={()=> window.open("https://www.linkedin.com/in/raj-anand0511/", "_blank")}/>;
}

export default Linkedin;
