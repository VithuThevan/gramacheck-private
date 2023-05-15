/* ----- StatusSuccess.js ----- */
import React from "react";
import "./StatusSuccess.scss";

// Assets
import StatusSuccessSVG from "../../assets/images/svg/success.svg";

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import { Link } from "react-router-dom";

function StatusSuccess() {
  return (
    <div className="statusSuccess">
      <div className="statusSuccess__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="statusSuccess__content">
          <div className="statusSuccess__content__image">
            <img src={StatusSuccessSVG} alt="" />
          </div>
          <div className="statusSuccess__content__title1">
            <p>STATUS : Success!</p>
          </div>
          <div className="statusSuccess__content__title2">
            <p>
              Your request for the document has been Approved by The grama
              niladari. You can download the document.
            </p>
          </div>
          <div className="statusSuccess__content__buttons">
            <Link to="/check-status">
              <Button variant="primary">GO BACK</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">DOWNLOAD</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusSuccess;
