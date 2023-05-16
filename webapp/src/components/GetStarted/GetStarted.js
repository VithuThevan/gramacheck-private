/* ----- GetStarted.js ----- */
import React from "react";
import "./GetStarted.scss";

// Assets
import GetStartedSVG from "../../assets/images/svg/get-started.svg";

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="getStarted">
      <div className="getStarted__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="getStarted__content">
          <div className="getStarted__content__image">
            <img src={GetStartedSVG} alt="" />
          </div>
          <div className="getStarted__content__title1">
            <p>Get Your Document!</p>
          </div>
          <div className="getStarted__content__title2">
            <p>
              Easy, Convinient & Efficient way to Get Your Official Documents.
            </p>
          </div>
          <div className="getStarted__content__buttons">
            <Link to="/request-form">
              <Button>GET STARTED</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
