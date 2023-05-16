/* ----- Navbar.scss ----- */
import React, { useState, useEffect } from "react";
import Button from "../../ui-library/Button/Button";

// Assests
import ProfilePicture from "../../assets/images/profilePicture/profilePicture.jpg";
import GramaCheckLogoV1 from "../../assets/images/logo/GramaSevakaLogo-01.png";
import GramaCheckLogoV2 from "../../assets/images/logo/GramaSevakaLogo-02.png";

// Components
import "./Navbar.scss";

// Libraries & Packages
import { useAuthContext } from "@asgardeo/auth-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Color from "color";

// Util
import { Colors } from "../../utils/styles/Theme";

function Navbar() {
  //State

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const { state, signOut, getBasicUserInfo } = useAuthContext();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // Functions

  // useEffect
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // useEffect
  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo()
        .then((basicUserDetails) => {
          console.log(basicUserDetails);
          const userData = {
            firstName: basicUserDetails.givenName,
            lastName: basicUserDetails.familyName,
            email: basicUserDetails.username,
          };
          setUser(userData);
          // localStorage.setItem("user", JSON.stringify(user));
          // console.log(basicUserDetails);
        })
        .catch((error) => {
          // Handle the error
        });
    } else {
      localStorage.removeItem("user");
    }
  }, [state.isAuthenticated]);

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
          {!user ? (
            <Skeleton
              count={1}
              width={150}
              height={20}
              baseColor={Color(Colors.primary_regular).alpha(0.2)}
              highlightColor={Color(Colors.primary_regular).alpha(0.2)}
            />
          ) : (
            <p>{`${user?.firstName} ${user?.lastName}`}</p>
          )}
        </div>
        <div className="navbar__userimage">
          {!user ? (
            <Skeleton
              borderRadius={"50%"}
              count={1}
              width={40}
              height={40}
              baseColor={Color(Colors.primary_regular).alpha(0.2)}
              highlightColor={Color(Colors.primary_regular).alpha(0.2)}
            />
          ) : (
            <img
              src={`https://ui-avatars.com/api/?background=${Colors.white.replace(
                "#",
                ""
              )}&color=${Colors.primary_regular.replace("#", "")}&?name=${
                user.firstName
              }+${user.lastName}`}
              alt=""
            />
          )}
        </div>
        <div className="navbar__signout">
          <Button variant="primary" onClick={signOut}>
            SIGNOUT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
