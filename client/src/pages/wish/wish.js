import Navigator from "../nav/nav";
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
      <div className="content">
        <div className="title">운 수 대 통</div>

        <div class="input__section">
          <form>
            <div>
              <input type="text" class="item" autofocus="true" />
            </div>
            <div>
              <button class="input__button">+ </button>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="wishList">데이터가 추가 될 예정입니다</div>
        <button>+</button>
        <button>d o n e</button>
      </div>
      {/* <div className="image"><img src={SunnyImage} alt="sunny" /></div> */}
      <WishModal></WishModal>
    </div>
  );
}

export default WishPage;
