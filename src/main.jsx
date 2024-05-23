// main.jsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const rootStyle = {
  background: "linear-gradient(to bottom right, #000080, #87CEEB)",
  minHeight: "100vh"
};


ReactDOM.render(
  <React.StrictMode>
    <div style={rootStyle}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
