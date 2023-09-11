import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";

import { ProjectContextProvider } from "./context/projectContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectContextProvider>
    <App />
  </ProjectContextProvider>
);
