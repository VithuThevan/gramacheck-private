/* ----- Navbar.scss ----- */
import React, { useState, useEffect } from "react";
import Button from "../../ui-library/Button/Button";

// Assests
import ProfilePicture from "../../assets/images/profilePicture/profilePicture.jpg";
import GramaCheckLogoV1 from "../../assets/images/logo/GramaSevakaLogo-01.png";
import GramaCheckLogoV2 from "../../assets/images/logo/GramaSevakaLogo-02.png";

// Components
import "./Navbar.scss";

function Navbar() {
  //State
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  // Functions

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img
            src={windowSize[0] < 700 ? GramaCheckLogoV1 : GramaCheckLogoV2}
            alt=""
          />
        </div>
        <div className="navbar__username">
          <p>Janice Brownwell</p>
        </div>
        <div className="navbar__userimage">
          <img src={ProfilePicture} alt="" />
        </div>
        <div className="navbar__signout">
          <Button variant="primary">SIGNOUT</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
