import { useRef, useState } from "react";
import "../scss/BurgerMenu.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const scrollToSection = (pixels: number) => {
    window.scrollTo(0, pixels);
    updateMenu();
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="burger-wrapper" style={{ width: "100%" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="bar">
          <ul>
            <li>
              <div onClick={() => scrollToSection(0)}>Home</div>
            </li>
            <li>
              <div onClick={() => scrollToSection(1000)}>Skills</div>
            </li>
            <li onClick={() => scrollToSection(1300)}>Projects</li>
            <li>
              <div onClick={() => scrollToSection(3000)}>Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
