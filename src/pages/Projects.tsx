import { useState } from "react";
import "../scss/Projects.scss";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isVisible: boolean;
  buttonText: string;
}

export const Projects = () => {
  const ProjectItem = ({
    title,
    description,
    image,
    link,
    buttonText,
  }: ProjectItemProps) => {
    const [showBackside, setShowBackside] = useState(true);
    const handleMouseOver = () => {
      setShowBackside(false);
    };
    const handleMouseLeave = () => {
      setShowBackside(true);
    };
    return (
      <div
        className="project-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {showBackside ? (
          <div className="frontside">
            <img src={image} alt={title} width={340} height={240} />
          </div>
        ) : (
          <div className={`backside ${showBackside ? "visible" : ""}`}>
            <div className="description-wrapper">
              <h4 className="project-title">{title}</h4>
              <p className="description">{description}</p>
            </div>
            <div className="button-wrapper">
              <button className="button-project">
                <a className="link" href={link} target="_blank">
                  {buttonText}
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="projects-wrapper">
      <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>Projects</h3>
      <div className="projects-inner">
        <ProjectItem
          title="Examensarbete"
          image="/joes.png"
          description="Som en del av mitt examensarbete har jag utvecklat en webbaserad konstnärlig portfolio för min syster."
          link="https://josefinstuborn.netlify.app/"
          isVisible={true}
          buttonText="Se hemsida"
        />

        <ProjectItem
          title="AI Image Generator"
          image="/generator.png"
          description="Hobby projekt som skapar en bild med AI."
          link="https://github.com/Stuuben/Ai-image-generator"
          isVisible={true}
          buttonText="Se Github"
        />
        <ProjectItem
          title="Zoo"
          image="/zoo.png"
          description="Inlämingsuppgift, hämta djur från ett api och sedan hålla koll på när djuren ska matas i React"
          link="https://adamstubornzoo.netlify.app/"
          isVisible={true}
          buttonText="Se hemsida"
        />
        <ProjectItem
          title="TicTacToe"
          image="/tictactoe.png"
          description="Inlämningsuppgift, Skapa spelet Tic Tac Toe i Vue"
          link="https://github.com/Stuuben/TicTacToe"
          isVisible={true}
          buttonText="Se Github"
        />
        <ProjectItem
          title="Resturant"
          image="/resturant.png"
          description="Grupparbete, Skapa ett bokningssystem för en resturang i React"
          link="https://github.com/annaboye/therestaurant-react"
          isVisible={true}
          buttonText="Se Github"
        />
        <ProjectItem
          title="Godisbutiken"
          image="/godis.png"
          description="Grupparbete, att bygga en webshop i React"
          link="https://adamstuborngodisbutiken.netlify.app/"
          isVisible={true}
          buttonText="Se hemsida"
        />
      </div>
    </div>
  );
};
