export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>Projects</h3>
      <div className="projects-inner">
        {" "}
        <div className="project-item">
          <div className="center">
            <h3>Examensarbete</h3>
            <img src="/jstuub.png" alt="Josefins hemsida" width={340} />

            <p className="description">
              Som en del av mitt examensarbete har jag utvecklat en webbaserad
              konstnärlig portfolio för min syster. Syftet med detta projekt var
              att skapa en dynamisk och estetiskt tilltalande plattform där hon
              kan visa upp och dela med sig av sin konst. Webbplatsen är
              utformad för att ge besökarna en djupare förståelse för hennes
              konstnärliga uttryck och processer.
            </p>
            <button className="button-project">
              <a
                className="link"
                href="https://josefinstuborn.netlify.app/"
                target="_blank"
              >
                Gå till hemsida
              </a>
            </button>
          </div>
        </div>
        <div className="project-item">
          <div className="center">
            <a
              className="link"
              rel="stylesheet"
              href="https://josefinstuborn.netlify.app/"
            >
              Examensarbete
            </a>
            <img src="/jstuub.png" alt="Josefins hemsida" width={340} />

            <p className="description">
              Som en del av mitt examensarbete har jag utvecklat en webbaserad
              konstnärlig portfolio för min syster. Syftet med detta projekt var
              att skapa en dynamisk och estetiskt tilltalande plattform där hon
              kan visa upp och dela med sig av sin konst. Webbplatsen är
              utformad för att ge besökarna en djupare förståelse för hennes
              konstnärliga uttryck och processer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
