import "./nav.css";
import cookies from "react-cookies";
import { useState, useEffect } from "react";

function Navigator() {
  const [isLogged, setLogged] = useState(false);
  useEffect(() => {
    if (cookies.load("userInfo")) setLogged(true);
  });

  function handleLogout() {
    cookies.remove("userInfo");
    window.location.href = "/";
  }

  function checkLogin() {
    if (!isLogged) {
      alert("회원가입 이후에 이용할 수있는 서비스 입니다.");
      window.location.href = "/";
      return false;
    } else {
      window.location.href = "/wish";
    }
  }

  return (
    <div class="nav">
      <nav class="navbar">
        <div class="navbar__logo">
          <i class="fab fa-accusoft"></i>
          <a href="/">
            <strong>JIONIE</strong>
          </a>
        </div>

        <ul class="navbar__menu">
          <li>
            <button
              className="nav_button"
              onClick={() => {
                checkLogin();
              }}
            >
              소원 빌러 가기
            </button>
          </li>
        </ul>

        <ul class="navbar__icons">
          <li>
            {isLogged && (
              <button className="nav_button" onClick={() => handleLogout()}>
                로그아웃
              </button>
            )}
          </li>
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;
