import "../scss/Contact.scss";
import { Form } from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h3>Contact</h3>
      <p className="contact-text">
        Kontakta mig på LinkedIn, mail eller via formuläret.
      </p>
      <div className="icons-box">
        <a href={"https://www.linkedin.com/in/adam-stuborn-8b61a524b/"}>
          <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
        </a>

        <a href={"mailto:a.stuborn@gmail.com"}>
          <FontAwesomeIcon icon={faEnvelopeSquare} className="contact-icon" />
        </a>
      </div>
      <Form></Form>
    </div>
  );
};
