import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//
import RTL from "./RTL";

const Theme = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          background: {
            default: prefersDarkMode ? "#121212" : "#fefefe",
          },
          primary: {
            main: "#006a6a",
          },
          secondary: {
            main: "#29b6f6",
          },
          error: {
            main: "#ef5350",
          },
        },
        typography: {
          fontFamily: "YekanBakh",
        },
        direction: "rtl",
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <RTL>{children}</RTL>
    </ThemeProvider>
  );
};

export default Theme;
