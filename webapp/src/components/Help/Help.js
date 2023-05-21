/* ----- Help.js ----- */
import React from "react";
import "./Help.scss";

// Assets
import HelpSVG from "../../assets/images/svg/help.svg";

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages
import InputTextArea from "../../ui-library/InputTextArea/InputTextArea";

function Help() {
  // State

  // useEffect

  // Fucnctions

  return (
    <div className="help">
      <div className="help__container">
        <div className="getStrated__navbar">
          <Navbar />
        </div>
        <div className="help__content">
          <div className="help__content__container">
            <div className="help__content__wrapper">
              <div className="help__content__title">
                <p>Get Connected With Slack!</p>
              </div>
              <div className="help__content__subtitle">
                <p>
                  Connect the right people, find anything you need and automate
                  the rest. That's work in Slack, your productivity platform.
                </p>
              </div>

              <div className="help__content__details">
                <div className="help__content__details__content">
                  <div className="help__content__details__content__textarea">
                    <InputTextArea
                      placeholder="Enter Your Message"
                      height={10}
                    />
                  </div>
                  <div className="help__content__details__content__button">
                    <Button variant="primary">SUBMIT</Button>
                  </div>
                </div>
                <div className="help__content__details__image">
                  <img src={HelpSVG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
