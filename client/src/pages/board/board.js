import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import { useState } from "react";
import "./board.css";

function BoardPage() {
  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <h1>W I S H</h1>
        <p>다른 사용자들이 작성한 소원을 훔쳐봐요!</p>
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
    </>
  );
}

export default BoardPage;
