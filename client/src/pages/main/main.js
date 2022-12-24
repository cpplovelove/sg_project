import Navigator from "../nav/nav";
import SunnyImage from "../../assets/sunny.png";
import { useState } from "react";
import JoinModal from "./join-modal";
import "./main.css";
import LoginModal from "./login-modal";
import { UserController } from "../../controller/user-controller";

function MainPage() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  function handleJoinOpen() {
    setJoinOpen(!joinOpen);
  }

  function handleLoginOpen() {
    setLoginOpen(!loginOpen);
  }

  return (
    <>
      <Navigator></Navigator>
      <div className="content">
        <a href="/board">
          <h1>소 원 을 말 해 봐</h1>
        </a>
        <p>
          연말 연초 목표를 세우느라 바쁜 J형 당신을 위한 서비스 동기가 없으면
          <br></br>
          실행까지 100만년 걸리는 당신을 위해 만든 서비스
        </p>
        <button onClick={handleJoinOpen}>회원 가입</button>
        <button onClick={handleLoginOpen}>로그인</button>
      </div>
      <div className="image">
        <img src={SunnyImage} alt="sunny" />
      </div>
      <JoinModal open={joinOpen} handleOpen={handleJoinOpen}></JoinModal>
      <LoginModal open={loginOpen} handleOpen={handleLoginOpen}></LoginModal>
    </>
  );
}

export default MainPage;
