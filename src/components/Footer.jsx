import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/jennifer--peterson/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JenniferPeterson1203" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:jenniferbushpeterson@gmail.com" >
          <FaEnvelope />
        </a>
      </div>
      <p>© 2025 Creatorverse</p>
    </footer>
  );
};

export default Footer;
