// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/globals.scss";
import "./styles/ant-overrides.scss";
import { WithAxios } from "./utils/axios.ts";
import { AuthProvider } from "./modules/auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <WithAxios>
    <AuthProvider>
      <App />
    </AuthProvider>
  </WithAxios>
  // </React.StrictMode>
);
