import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/globals.scss";
import "./styles/ant-overrides.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
