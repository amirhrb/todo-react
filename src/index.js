import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/fonts.css";
import App from "./App";
import TodoContextProvider from "./context/TodoContextProvider";
import Theme from "./mui/Theme";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <TodoContextProvider>
    <Theme>
      <CssBaseline />
      <App />
    </Theme>
  </TodoContextProvider>,
  document.getElementById("root")
);
