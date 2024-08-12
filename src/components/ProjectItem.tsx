import { useState } from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isVisible: boolean;
  buttonText: string;
}

export const ProjectItem = ({
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
