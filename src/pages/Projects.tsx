import { useState } from "react";
import "../scss/Projects.scss";

export const Projects = () => {
  const [showBacksideZoo, setShowBacksideZoo] = useState(true);
  const [showBacksideExamen, setShowBacksideExamen] = useState(true);
  const [showBacksideGodis, setShowBacksideGodis] = useState(true);
  const [showBacksideTicTacToe, setShowBacksideTicTacToe] = useState(true);
  const handleMouseOverZoo = () => {
    console.log("over zoo");

    setShowBacksideZoo(false);
  };
  const handleMouseLeaveZoo = () => {
    setShowBacksideZoo(true);
  };

  const handleMouseOverExamen = () => {
    setShowBacksideExamen(false);
  };
  const handleMouseLeaveExamen = () => {
    setShowBacksideExamen(true);
  };
  const handleMouseOverGodis = () => {
    setShowBacksideGodis(false);
  };
  const handleMouseLeaveGodis = () => {
    setShowBacksideGodis(true);
  };

  const handleMouseOverTicTacToe = () => {
    setShowBacksideTicTacToe(false);
  };
  const handleMouseLeaveTicTacToe = () => {
    setShowBacksideTicTacToe(true);
  };

  return (
    <div className="projects-wrapper">
      <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>Projects</h3>
      <div className="projects-inner">
        <div
          className="project-item"
          onMouseOver={() => handleMouseOverExamen()}
          onMouseLeave={() => handleMouseLeaveExamen()}
        >
          {showBacksideExamen ? (
            <div className="frontside">
              <img
                src="/joes.png"
                alt="Josefins hemsida"
                width={340}
                height={240}
              />
            </div>
          ) : (
            <div className={`backside ${showBacksideExamen ? "visible" : ""}`}>
              <div className="description-wrapper">
                <h4 className="project-title">Examensarbete</h4>
                <p className="description-examen">
                  Som en del av mitt examensarbete har jag utvecklat en
                  webbaserad konstnärlig portfolio för min syster. Syftet med
                  detta projekt var att skapa en dynamisk och estetiskt
                  tilltalande plattform där hon kan visa upp och dela med sig av
                  sin konst. Webbplatsen är utformad för att ge besökarna en
                  djupare förståelse för hennes konstnärliga uttryck och
                  processer.
                </p>
              </div>
              <div className="button-wrapper">
                <button className="button-project">
                  <a
                    className="link"
                    href="https://josefinstuborn.netlify.app/"
                    target="_blank"
                  >
                    Se hemsida
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="project-item"
          onMouseOver={() => handleMouseOverZoo()}
          onMouseLeave={() => handleMouseLeaveZoo()}
        >
          {showBacksideZoo ? (
            <div className="frontside">
              <img
                src="/zoo.png"
                alt="Josefins hemsida"
                width={340}
                height={240}
              />
            </div>
          ) : (
            <div className={`backside ${showBacksideZoo ? "visible" : ""}`}>
              <div className="description-wrapper">
                <h4 className="project-title">The Zoo</h4>
                <p className="description">
                  Inlämingsuppgift i skolan där vi skulle hämta djur från ett
                  api och sedan hålla koll på när djuren ska matas
                </p>
              </div>
              <div className="button-wrapper">
                <button className="button-project">
                  <a
                    className="link"
                    href="https://adamstubornzoo.netlify.app/"
                    target="_blank"
                  >
                    Se hemsida
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="project-item"
          onMouseOver={() => handleMouseOverGodis()}
          onMouseLeave={() => handleMouseLeaveGodis()}
        >
          {showBacksideGodis ? (
            <div className="frontside">
              <img
                src="/godis.png"
                alt="Josefins hemsida"
                width={340}
                height={240}
              />
            </div>
          ) : (
            <div className={`backside ${showBacksideGodis ? "visible" : ""}`}>
              <div className="description-wrapper">
                <h4 className="project-title">Godisbutiken</h4>
                <p className="description">Grupparbete att bygga en webshop</p>
              </div>
              <div className="button-wrapper">
                <button className="button-project">
                  <a
                    className="link"
                    href="https://adamstuborngodisbutiken.netlify.app/"
                    target="_blank"
                  >
                    Se hemsida
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="project-item"
          onMouseOver={() => handleMouseOverTicTacToe()}
          onMouseLeave={() => handleMouseLeaveTicTacToe()}
        >
          {showBacksideTicTacToe ? (
            <div className="frontside">
              <img
                src="/tictactoe.png"
                alt="Josefins hemsida"
                width={340}
                height={240}
              />
            </div>
          ) : (
            <div
              className={`backside ${showBacksideTicTacToe ? "visible" : ""}`}
            >
              <div className="description-wrapper">
                <h4 className="project-title">Tic Tac Toe!</h4>
                <p className="description">
                  Inlämingsuppgift i skolan där vi skulle hämta djur från ett
                  api och sedan hålla koll på när djuren ska matas
                </p>
              </div>
              <div className="button-wrapper">
                <button className="button-project">
                  <a
                    className="link"
                    href="https://github.com/Stuuben/TicTacToe"
                    target="_blank"
                  >
                    Se Github
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
