import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; // Adjust the path if needed
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import Bootstrap and Animate.css from node_modules
import "animate.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
