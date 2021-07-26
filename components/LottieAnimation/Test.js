import React from "react";
import Lottie from "lottie-react";
import arrowAnimation from "./Lottie_arrow.json";

const style = {
    height:'100px',
    cursor: 'pointer'
}

function Test() {
  return (
    <div style={{filter: 'hue-rotate(180deg)'}}>
      <Lottie animationData={arrowAnimation} style={style}  />
    </div>
  );
}

export default Test;
