import "../scss/Home.scss";

export const downloadCV = () => {
  const cvUrl = "/CV_Adam.pdf";

  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "/CV_Adam.pdf";

  link.click();
};
