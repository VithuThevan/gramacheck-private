/* ----- Button.js ----- */
import React, { useState, useEffect } from "react";
import "./Button.scss";

// Utils
import { Colors } from "../../utils/styles/Theme.js";

// Libraries & Packages
import Color from "color";

function Button({ variant, children }) {
  // State
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState();
  const [buttonTextColor, setButtonTextColor] = useState();

  // Functions
  const handleOnMouseEnter = () => {
    // Primary
    if (variant === "primary") {
      setButtonBackgroundColor(Color(Colors.primary_regular).darken(0.2));
    }
    // Secondary
    if (variant === "secondary") {
      setButtonBackgroundColor(Color(Colors.grey_light).darken(0.1));
    }
    // Default
    else {
      setButtonBackgroundColor(Color(Colors.primary_regular).darken(0.2));
    }
  };

  const handleOnMouseLeave = () => {
    // Primary
    if (variant === "primary") {
      setButtonBackgroundColor(Colors.primary_regular);
      setButtonTextColor(Colors.white);
    }
    // Secondary
    if (variant === "secondary") {
      setButtonBackgroundColor(Colors.grey_light);
      setButtonTextColor(Colors.black);
    }
    // Default
    else {
      setButtonBackgroundColor(Colors.primary_regular);
      setButtonTextColor(Colors.white);
    }
  };

  // useEffect
  useEffect(() => {
    const setOnLoadStyles = () => {
      // Primary
      if (variant === "primary") {
        setButtonBackgroundColor(Colors.primary_regular);
        setButtonTextColor(Colors.white);
      }
      // Secondary
      if (variant === "secondary") {
        setButtonBackgroundColor(Colors.grey_light);
        setButtonTextColor(Colors.black);
      }
      // Default
      else {
        setButtonBackgroundColor(Colors.primary_regular);
        setButtonTextColor(Colors.white);
      }
    };
    setOnLoadStyles();
    return () => setOnLoadStyles();
  }, [variant]);

  return (
    <button
      className="uiLibrary__button"
      // Styles
      style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}
      // Events
      onMouseEnter={() => handleOnMouseEnter()}
      onMouseLeave={() => handleOnMouseLeave()}
    >
      {children}
    </button>
  );
}

export default Button;
