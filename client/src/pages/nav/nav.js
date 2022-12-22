import "./nav.css";

function Navigator() {
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
            <a href="/wish">소원 빌러 가기</a>
          </li>
        </ul>

        <ul class="navbar__icons">
          <li>
            <i class="fab fa-twitter"></i>
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
