import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import "./main.css";

function MainPage() {
  return (
    <>
      <Navigator></Navigator>
      <div className="content"></div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
    </>
  );
}

export default MainPage;
