import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "http://localhost:3000/get-started",
        signOutRedirectURL: "http://localhost:3000",
        clientID: "wFROSNmxW5BMey8bGfJRzZqFxB8a",
        baseUrl: "https://api.asgardeo.io/t/naveenl",
        scope: ["openid", "profile", "phone"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
