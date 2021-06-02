import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
