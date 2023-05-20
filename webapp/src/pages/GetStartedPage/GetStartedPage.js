/* ----- GetStartedPage.js ----- */
import React from "react";

// Components
import GetStarted from "../../components/GetStarted/GetStarted";
import GramaSevakaDashboard from "../../components/GramaSevakaDashboard/GramaSevakaDashboard";

// Libraries & Packages
import { useAuthContext } from "@asgardeo/auth-react";

function GetStartedPage() {
  // Asgardeo Auth Context
  const { state, getBasicUserInfo } = useAuthContext();

  if (state.isAuthenticated) {
    getBasicUserInfo()
      .then((basicUserDetails) => {
        const user = {
          firstName: basicUserDetails.givenName,
          lastName: basicUserDetails.familyName,
          email: basicUserDetails.email,
          group: basicUserDetails.groups,
        };
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("requestId");
  }

  // get the user group
  var userGroup = JSON.parse(localStorage.getItem("user")).group;
  if (userGroup !== undefined) {
    userGroup = userGroup[0];
  }

  return (
    <div>
      {userGroup === "GramaSevaka" ? <GramaSevakaDashboard /> : <GetStarted />}
    </div>
  );
}

export default GetStartedPage;
