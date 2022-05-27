import { useLottie } from "lottie-react";
import React from "react";
import data1 from "./../../images/loading/portfolio-loading.json";
import data2 from "./../../images/loading/loading2.json";
import data3 from "./../../images/loading/loading3.json";
import data4 from "./../../images/loading/loading4.json";
import data5 from "./../../images/loading/loading6.json";

const Loading = () => {
    const style = {
      margin: "auto",
      width: "500px",
      height: "auto",
      color: "black",
    };

  const options = {
    animationData:data5,
    loop: true,
    autoplay: true,

  };

  const { View } = useLottie(options, style);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor:"black"
      }}
    >
      {View}
    </div>
  );
};

export default Loading;
