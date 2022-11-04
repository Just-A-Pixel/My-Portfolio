import React from "react";
import Lottie from "lottie-react";
import arrowAnimation from "./Lottie_arrow.json";

const style = {
    // height:'1000px',
    // width: '1000px',
    cursor: 'pointer',

}

function Test() {
  return (
    <div style={{filter: 'hue-rotate(180deg)'}}>
      <Lottie loop animationData={arrowAnimation} style={style} />
    </div>
  );
}

export default Test;
