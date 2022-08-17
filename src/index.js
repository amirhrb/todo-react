import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/fonts.css";
import App from "./App";
import Theme from "./mui/Theme";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <Theme>
    <CssBaseline />
    <App />
  </Theme>,
  document.getElementById("root")
);
