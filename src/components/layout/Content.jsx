import React from "react";
import { Box, Container } from "@material-ui/core";

export default function Content({ children }) {
  return (
    <Box display="flex" flexDirection="column" component="main">
      {children}
    </Box>
  );
}

// <Container component="main" disableGutters maxWidth="lg">
//   {children}
// </Container>
