/* ----- CheckStatus.js ----- */
import React from "react";
import "./CheckStatus.scss";

// Assets
import CheckStatusSVG from "../../assets/images/svg/check-status.svg";

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import { Link } from "react-router-dom";

function CheckStatus() {
  return (
    <div className="checkStatus">
      <div className="checkStatus__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="checkStatus__content">
          <div className="checkStatus__content__image">
            <img src={CheckStatusSVG} alt="" />
          </div>
          <div className="checkStatus__content__title1">
            <p>Check your request status!</p>
          </div>
          <div className="checkStatus__content__title2">
            <p>
              You Have already created a request for the document. click the
              button below to review the status of the request.
            </p>
          </div>
          <div className="checkStatus__content__buttons">
            <Link to="/">
              <Button>Check Status</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckStatus;
