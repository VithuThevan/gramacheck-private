/* ----- App.js ----- */
import "./App.scss";

// Libraries & Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import RequestSuccessPage from "./pages/RequestSuccessPage/RequestSuccessPage";
import CheckStatusPage from "./pages/CheckStatusPage/CheckStatusPage";
import StatusSuccessPage from "./pages/StatusSuccessPage/StatusSuccessPage";
import StatusPendingPage from "./pages/StatusPendingPage/StatusPendingPage";
import StatusRejectedPage from "./pages/StatusRejectedPage/StatusRejectedPage";
import RequestFormPage from "./pages/RequestFormPage/RequestFormPage";
import HelpPage from "./pages/HelpPage/HelpPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";

function App() {
  // Asgardeo Auth Context
  const { state } = useAuthContext();

  const Routing = () => {
    return (
      <>
        {state.isAuthenticated ? (
          <Switch>
            {/* Help */}
            <Route path="/help">
              <HelpPage />
            </Route>
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
            {/* Loader */}
            <Route path="/loader">
              <RedirectPage />
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
        <ToastContainer theme="light" />
      </Router>
    </div>
  );
}

export default App;
