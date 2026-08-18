import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BirthdayExperienceProvider } from "./context/BirthdayExperience";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BirthdayExperienceProvider>
      <App />
    </BirthdayExperienceProvider>
  </React.StrictMode>,
);
