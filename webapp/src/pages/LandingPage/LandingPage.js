/* ----- LandingPage.js ----- */
import React from "react";

// Components
import Landing from "../../components/Landing/Landing";

function LandingPage({ signIn, signOut }) {
  return (
    <>
      <Landing signIn={signIn} signOut={signOut} />
    </>
  );
}

export default LandingPage;
