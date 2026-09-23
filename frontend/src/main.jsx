import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  ReconstructionProvider,
} from "./context/ReconstructionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReconstructionProvider>
      <App />
    </ReconstructionProvider>
  </React.StrictMode>
);