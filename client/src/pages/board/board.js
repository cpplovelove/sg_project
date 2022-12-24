import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import { useState, useEffect } from "react";
import { PurposeController } from "../../controller/purpose-controller";
import "./board.css";
import axios from "axios";
import instance from "../../service/axios-config";

function BoardPage() {
  const [fruit, setFruit] = useState();
  const [purposes, setPurpose] = useState();

  useEffect(() => {
    setFruit("Apple");
    async function test() {
      const data = await PurposeController.getPurposes();
      setPurpose(data);
      console.log("data", data);
    }
    test();
    console.log("Fruit", fruit);
  }, [fruit]);

  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <h1>W I S H</h1>
        <div className="purposes">
          {purposes && <div className="purpose"> {purposes[0].content}</div>}
          <br />
          {purposes && <div className="purpose"> {purposes[1].content}</div>}
          <br />
          {purposes && <div className="purpose"> {purposes[2].content}</div>}
          <br />
          {purposes && <div className="purpose"> {purposes[3].content}</div>}
          <br />
          {purposes && <div className="purpose"> {purposes[4].content}</div>}
          {/* map으로 변경하기 */}
        </div>
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
    </>
  );
}

export default BoardPage;
