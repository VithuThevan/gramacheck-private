/* ----- App.js ----- */
import { useEffect } from "react";
import "./App.scss";

// Libraries & Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import RequestSuccessPage from "./pages/RequestSuccessPage/RequestSuccessPage";
import CheckStatusPage from "./pages/CheckStatusPage/CheckStatusPage";
import StatusSuccessPage from "./pages/StatusSuccessPage/StatusSuccessPage";
import StatusPendingPage from "./pages/StatusPendingPage/StatusPendingPage";
import StatusRejectedPage from "./pages/StatusRejectedPage/StatusRejectedPage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";

function App() {
  // Asgardeo Auth Context
  const { state, getBasicUserInfo } = useAuthContext();

  const Routing = () => {
    const history = useHistory();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        // history.push("/get-started");
        // dispatch({ type: "USER", payload: user });
      } else {
        // history.push("/");
      }
    }, []);

    useEffect(() => {
      getAccessToken()
        .then((accessToken) => {
          // console.log(accessToken);
        })
        .catch((error) => {
          console.log(error);
        });

      getBasicUserInfo()
        .then((basicUserDetails) => {
          console.log(basicUserDetails.displayName);
        })
        .catch((error) => {
          // Handle the error
        });

      getDecodedIDToken()
        .then((decodedIDToken) => {
          // console.log(decodedIDToken);
        })
        .catch((error) => {
          // Handle the error
        });
    }, []);

    // useEffect
    useEffect(() => {
      if (state.isAuthenticated) {
        getBasicUserInfo()
          .then((basicUserDetails) => {
            const user = {
              firstName: basicUserDetails.givenName,
              lastName: basicUserDetails.familyName,
              email: basicUserDetails.username,
            };
            localStorage.setItem("user", JSON.stringify(user));
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        localStorage.removeItem("user");
      }
    }, []);

    return (
      <>
        {state.isAuthenticated ? (
          <Switch>
            {/* StatusRejected */}
            <Route path="/status-rejected">
              <StatusRejectedPage />
            </Route>
            {/* StatusSuccess */}
            <Route path="/status-success">
              <StatusSuccessPage />
            </Route>
            {/* StatusPending */}
            <Route path="/status-pending">
              <StatusPendingPage />
            </Route>
            {/* CheckStatus */}
            <Route path="/check-status">
              <CheckStatusPage />
            </Route>
            {/* RequestSuccess */}
            <Route path="/request-success">
              <RequestSuccessPage />
            </Route>
            {/* RequestForm */}
            <Route path="/request-form">
              <RequestFormPage />
            </Route>
            {/* GetStarted */}
            <Route path="/get-started">
              <GetStartedPage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            {/* Landing */}
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        )}
      </>
    );
  };

  return (
    <div className="app">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
