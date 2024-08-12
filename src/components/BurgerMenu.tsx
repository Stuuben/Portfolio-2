import { useState } from "react";
import "../scss/BurgerMenu.scss";

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
    console.log("isMenuClicked", isMenuClicked);
  };

  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({});
    updateMenu();
  };

  return (
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
              <div className="nav-link" onClick={() => scrollToView("home")}>
                Home
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => scrollToView("skills")}>
                Skills
              </div>
            </li>
            <li>
              <div
                className="nav-link"
                onClick={() => scrollToView("projects-anchor")}
              >
                Projects
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => scrollToView("contact")}>
                Contact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
