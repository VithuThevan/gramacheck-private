/* ----- GetStarted.js ----- */
import "./GetStarted.scss";

// Assets
import GetStartedSVG from "../../assets/images/svg/get-started.svg";

// Components
import Navbar from "../Navbar/Navbar";
import Button from "../../ui-library/Button/Button";

// Libraries & Packages
import { useAuthContext } from "@asgardeo/auth-react";

function GetStarted() {
  // Asgardeo Auth Context
  const { state, getBasicUserInfo } = useAuthContext();

  if (state.isAuthenticated) {
    getBasicUserInfo()
      .then((basicUserDetails) => {
        console.log(basicUserDetails);
        const user = {
          firstName: basicUserDetails.givenName,
          lastName: basicUserDetails.familyName,
          email: basicUserDetails.email,
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

  // Choreo base endpoint
  const API_HOST =
    "https://f82fbb50-01e1-4078-a9f8-0d4ed79a518a-dev.e1-us-east-azure.choreoapis.dev/sbmq/grama-check/requestservice-369/1.0.0";

  // Asgardeo access token
  const TOKEN = JSON.parse(
    sessionStorage.getItem("session_data-instance_0")
  ).access_token;

    const getUserStatus = () => {
      var url = API_HOST + `/request/${JSON.parse(localStorage.getItem("user")).email}`;

      var requestOptions = {
        method: 'GET',
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
        redirect: 'follow'
      }
      fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        console.log(data);
        const requestId = {
          requestId: data.request_id,
        };
        localStorage.setItem("requestId", JSON.stringify(requestId));
        // This will log the response data to the console.
        console.log(data.request_id);
        // Redirect to the appropriate page based on the request status
        if (data.status === "success"||data.status === "rejected"||data.status === "pending") {
          console.log(data.requestId);
          window.location.href = "/check-status";
        } else {
          window.location.href = "/request-form";
        }
      })
      .catch(error => console.log(error));
  };

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
            <Button onClick={getUserStatus}>GET STARTED</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
