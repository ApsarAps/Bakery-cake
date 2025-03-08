import App from './App.jsx';
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
