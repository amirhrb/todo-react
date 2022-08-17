import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

import Form from "./components/Form";

function App() {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Container
      width="full"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingY: 4,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "text.secondary",
        }}
      >
        تودو اپ!
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          boxShadow:
            mode === "light"
              ? "rgba(0,0,0,0.1) 0px 4px 12px"
              : "rgba(255,255,255,0.1) 0px 4px 12px",
          borderRadius: 4,
        }}
      >
        <Form />
      </Container>
    </Container>
  );
}

export default App;
