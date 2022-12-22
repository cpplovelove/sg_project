import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import "./main.css";

function MainPage() {
  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <h1>소 원 을 말 해 봐</h1>
        <p>
          연말 연초 목표를 세우느라 바쁜 J형 당신을 위한 서비스 동기가 없으면
          <br></br>
          실행까지 100만년 걸리는 당신을 위해 만든 서비스
        </p>
        <button>
          <a href="/join">회원 가입</a>
        </button>
        <button>
          <a href="/login">로그인</a>
        </button>
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
    </>
  );
}

export default MainPage;
