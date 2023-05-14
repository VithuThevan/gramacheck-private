/* ----- App.js ----- */
import "./App.scss";

// Libraries & Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import RequestSuccessPage from "./pages/RequestSuccessPage/RequestSuccessPage";
import CheckStatusPage from "./pages/CheckStatusPage/CheckStatusPage";
import StatusSuccessPage from "./pages/StatusSuccessPage/StatusSuccessPage";
import StatusPendingPage from "./pages/StatusPendingPage/StatusPendingPage";
import StatusRejectedPage from "./pages/StatusRejectedPage/StatusRejectedPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* StatusRejected */}
          <Route path="/status-rejected" element={<StatusRejectedPage />} />
          {/* StatusSuccess */}
          <Route path="/status-success" element={<StatusSuccessPage />} />
          {/* StatusPending */}
          <Route path="/status-pending" element={<StatusPendingPage />} />
          {/* CheckStatus */}
          <Route path="/check-status" element={<CheckStatusPage />} />
          {/* RequestSuccess */}
          <Route path="/request-success" element={<RequestSuccessPage />} />
          {/* GetStarted */}
          <Route path="/get-started" element={<GetStartedPage />} />
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
