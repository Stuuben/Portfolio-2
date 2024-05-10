import "../scss/Error.scss";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error-wrapper">
      <div>
        <h3>Denna sidan finns inte!</h3>
        <div>
          <Link style={{ color: "rgb(0, 183, 255)" }} to="/">
            Tillbaka till Hem
          </Link>
        </div>
      </div>
    </div>
  );
};
