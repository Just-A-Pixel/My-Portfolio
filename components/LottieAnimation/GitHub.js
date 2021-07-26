import React from "react";
import Lottie from "lottie-react";
import animation from "./github.json";

const style = {
  width: "40px",
  cursor: "pointer",
};
function GitHub() {
  return <Lottie animationData={animation} style={style} />;
}

export default GitHub;
