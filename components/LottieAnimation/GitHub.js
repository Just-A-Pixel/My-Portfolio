import React from "react";
import Lottie from "lottie-react";
import animation from "./github.json";

const style = {
  width: "40px",
  cursor: "pointer",
};
function GitHub() {
  return <Lottie animationData={animation} style={style} onClick={() => window.open("https://github.com/Just-A-Pixel", "_blank")}/>;
}

export default GitHub;
