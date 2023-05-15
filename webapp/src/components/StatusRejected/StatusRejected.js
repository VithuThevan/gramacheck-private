/* ----- StatusRejected.js ----- */
import React from "react";
import "./StatusRejected.scss";

// Assets
import StatusRejectedSVG from "../../assets/images/svg/rejected.svg";

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import { Link } from "react-router-dom";

function StatusRejected() {
  return (
    <div className="statusRejected">
      <div className="statusRejected__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="statusRejected__content">
          <div className="statusRejected__content__image">
            <img src={StatusRejectedSVG} alt="" />
          </div>
          <div className="statusRejected__content__title1">
            <p>STATUS : Rejected!</p>
          </div>
          <div className="statusRejected__content__title2">
            <p>
              Sorry! Your request for the document has been rejected by grama
              niladari.
            </p>
          </div>
          <div className="statusRejected__content__buttons">
            <Link to="/check-status">
              <Button>GO BACK</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusRejected;
