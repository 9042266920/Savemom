import "../../styles/navbar.css";
import logoImg from "../../assets/savemom_logo.png";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { useState } from "react"; // <-- ADD THIS

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // <-- ADD THIS

  const links = [
    { label: "Home", path: "#home" },
    { label: "Features", path: "#features" },
    { label: "Our Products", path: "#products" },
    { label: "FAQ", path: "#faq" },
    { label: "Contact us", path: "#contact" },
  ];
  

  return (
    <nav className="navbar">
      {/* LEFT: Logo + Title + Links */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logoImg} alt="SaveMom Logo" />
          <span>savemom</span>
        </div>

        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Theme toggle + Login */}
      <div className="navbar-right">
        <div
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        <button className="login-btn">
          <FaShoppingCart className="cart-icon" />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
