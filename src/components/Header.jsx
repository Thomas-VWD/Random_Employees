import "./Header.scss";
import githubLogo from "../assets/github.svg";

function Header() {
  return (
    <div className="headBox">
      <h1 className="appName">Random employees API</h1>
      <p className="by">
        By{" "}
        <a href="https://github.com/Thomas-VWD">
          <img src={githubLogo} alt="GitHub Logo" /> Thomas-Vwd
        </a>
      </p>
    </div>
  );
}
export default Header;
