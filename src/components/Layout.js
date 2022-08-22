import React from "react";

//MUI
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Layout = ({ children }) => {
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
      {children}
    </Container>
  );
};

export default Layout;
