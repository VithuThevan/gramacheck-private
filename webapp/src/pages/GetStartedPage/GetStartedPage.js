/* ----- GetStartedPage.js ----- */
import React, { useEffect, useState } from "react";

// Components
import GetStarted from "../../components/GetStarted/GetStarted";
import GramaSevakaDashboard from "../../components/GramaSevakaDashboard/GramaSevakaDashboard";

// Libraries & Packages
import { useAuthContext } from "@asgardeo/auth-react";

function GetStartedPage() {
  // Asgardeo Auth Context
  const { state, getBasicUserInfo } = useAuthContext();
  const [isGS, setIsGS] = useState(false);

  useEffect(() => {
    const getBasicUserDetails = () => {
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
            if (user.group !== undefined) {
              if (user.group[0] === "GramaSevaka") {
                setIsGS(true);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("requestId");
      }
    }
    getBasicUserDetails();
  }, [getBasicUserInfo, state.isAuthenticated])

  return (
    <div>
      {isGS ? <GramaSevakaDashboard /> : <GetStarted />}
    </div>
  );
}

export default GetStartedPage;
