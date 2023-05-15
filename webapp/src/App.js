/* ----- App.js ----- */
import { useEffect } from "react";
import "./App.scss";

// Libraries & Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
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
  const Routing = () => {
    const { state, signIn, signOut } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
      if (state.isAuthenticated) {
        history.push("/get-started");
      } else {
        history.push("/");
      }
    }, []);

    console.log(state);

    useEffect(() => {
      console.log(state);
    }, [state]);

    return (
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
        {/* Landing */}
        <Route path="/">
          <LandingPage signIn={signIn} signOut={signOut} />
        </Route>
      </Switch>
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
