/* ----- GramaSevakaDashboard.js ----- */
import React, { useState, useEffect } from "react";
import "./GramaSevakaDashboard.scss";

// Assets

// Components
import Button from "../../ui-library/Button/Button";
import Navbar from "../Navbar/Navbar";

// Libraries & Packages

function GramaSevakaDashboard() {
  // State

  return (
    <div className="gramaSevakaDashboard">
      <div className="gramaSevakaDashboard__container">
        <div className="gramaSevakaDashboard__navbar">
          <Navbar mockUser={{ firstName: "Grama", lastName: "Sevaka" }} />
        </div>
        <div className="gramaSevakaDashboard__content">
          <div className="gramaSevakaDashboard__content__container">
            <div className="gramaSevakaDashboard__title">
              <p>Grama Sevaka - Dashboard</p>
            </div>
            {/* Header */}
            <div className="gramaSevakaDashboard__header">
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Email</p>
                </div>
              </div>
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Status</p>
                </div>
              </div>
              <div className="gramaSevakaDashboard__header__item">
                <div className="gramaSevakaDashboard__header__item__title">
                  <p>Action</p>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="gramaSevakaDashboard__body"></div>
            <div className="gramaSevakaDashboard__item">
              <div className="gramaSevakaDashboard__title">
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GramaSevakaDashboard;
