import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import WishModal from "./wish-modal";
import { useState } from "react";
import "./wish.css";

function WishPage() {
  const [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <h1>운 수 대 통</h1>
        <p>올해 목표를 작성해봐요!</p>
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
      <WishModal></WishModal>
    </>
  );
}

export default WishPage;
