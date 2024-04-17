import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "@mantine/core/styles.css";
import '@mantine/code-highlight/styles.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
