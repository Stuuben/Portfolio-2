import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/Home.scss";

export const downloadCV = () => {
  const cvUrl = "/CV.pdf";

  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "/CV.pdf";

  link.click();
};
