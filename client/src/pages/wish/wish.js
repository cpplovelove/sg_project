import Navigator from "../nav/nav";
import WishModal from "./wish-modal";
import { useState } from "react";
import "./wish.css";
import { PurposeController } from "../../controller/purpose-controller";

function WishPage() {
  const [wish, setWish] = useState();
  const [isExist, setIsExist] = useState(localStorage.getItem("wish") != null);

  function createPurposes() {
    const resultStatus = PurposeController.createPurposes(
      1,
      localStorage.getItem("wish").split(",")
    );
    if (resultStatus) {
      alert("목표 등록 성공!");
    } else {
      alert("등록 실패");
    }
  }

  const onChange = (e) => {
    setWish(e.target.value);
  };

  function addWish() {
    if (isExist) {
      const tempList = [];
      tempList.push(localStorage.getItem("wish"));
      tempList.push(wish);
      localStorage.setItem("wish", tempList);
    } else {
      localStorage.setItem("wish", wish);
    }
  }
  return (
    <div className="wrapper">
      <Navigator></Navigator>
      <div className="header">
        <div className="title">운 수 대 통</div>
        <div className="input__section">
          <form>
            <div>
              <input
                type="text"
                className="item"
                autoFocus={true}
                onChange={onChange}
                value={wish}
              />
            </div>
            <div>
              <button
                className="input__button"
                onClick={() => {
                  addWish();
                }}
              >
                +
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="content">
        <div className="wishList">
          {isExist &&
            localStorage.getItem("wish").split(",").length > 0 &&
            localStorage
              .getItem("wish")
              .split(",")
              .map((item) => {
                {
                  return (
                    <div className="wish">
                      {item}
                      <br />
                    </div>
                  );
                }
              })}
        </div>

        <table style={{ textAlign: "center" }}>
          <tr>
            <td>
              <button
                onClick={() => {
                  localStorage.clear();
                  setIsExist(false);
                }}
              >
                c l e a r
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  createPurposes();
                }}
              >
                d o n e
              </button>
            </td>
          </tr>
        </table>
      </div>
      <WishModal></WishModal>
    </div>
  );
}

export default WishPage;
