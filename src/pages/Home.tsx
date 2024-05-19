import "../scss/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faAlignRight, faA, fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faS, faAlignRight);
import {
  fab,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import { About } from "./About";
import { downloadCV } from "../components/DownloadCV";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
library.add(fab, faGithubSquare);
library.add(fab, faLinkedin);

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <div className="img-container">
          <div className="me-img"></div>
        </div>
        <div className="content">
          <p>Hi, i'm Adam!</p>
          <h2>FrontEnd Developer</h2>
          <div className="icons-wrapper">
            <FontAwesomeIcon
              onClick={downloadCV}
              className="cv-icon"
              icon={["fas", "align-right"]}
              title="Download CV"
            />

            <a href={"https://github.com/Stuuben"}>
              <FontAwesomeIcon
                className="github-icon"
                icon={["fab", "github-square"]}
                title="Github"
              />
            </a>

            <a href={"https://www.linkedin.com/in/adam-stuborn-8b61a524b/"}>
              <FontAwesomeIcon
                className="linkedin-icon"
                icon={["fab", "linkedin"]}
                title="LinkedIn"
              />
            </a>
          </div>
        </div>
        <About></About>
      </div>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};
