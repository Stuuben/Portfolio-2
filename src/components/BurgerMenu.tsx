import { useState } from "react";
import "../scss/BurgerMenu.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
              <Link onClick={updateMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={updateMenu} to="/about">
                About
              </Link>
            </li>
            <li>
              <a href="skills">Skills</a>
            </li>
            <li>
              <Link onClick={updateMenu} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
