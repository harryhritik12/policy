import React from "react";
import PrivacyPolicy from "./Page/PrivacyPolicy";

import CookieConsent from 'react-cookie-consent';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <PrivacyPolicy />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default App;
