import { useState } from "react";
import "../scss/BurgerMenu.scss";

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
        <div className={menu_class}>
          <div className="bar">
            <ul>
              <li>
                <div className="nav-link" onClick={() => scrollToSection(1000)}>
                  Skills
                </div>
              </li>
              <li>
                <div className="nav-link" onClick={() => scrollToSection(1300)}>
                  Projects
                </div>
              </li>
              <li>
                <div className="nav-link" onClick={() => scrollToSection(3000)}>
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
