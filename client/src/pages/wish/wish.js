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
    <div className="wrapper">
      <Navigator></Navigator>
      <div className="content-wrapper">
        <div className="title">운 수 대 통</div>
        <div className="content">데이터가 추가 될 예정입니다</div>
        <button>+</button>
        <button>d o n e</button>
      </div>
      {/* <div className="image"><img src={SunnyImage} alt="sunny" /></div> */}
      <WishModal></WishModal>
    </div>
  );
}

export default WishPage;
