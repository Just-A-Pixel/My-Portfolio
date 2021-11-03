import React from "react";
import Lottie from "lottie-react";
import animation from "./webAnimation2.json";

const style = {
  width: "400px",
  padding: 0,
  marginTop: '180px'
};
function webAnimation() {
  return <Lottie animationData={animation} style={style}/>;
}

export default webAnimation;
