import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/components/ProTip";
import Link from "../src/components/Link";

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <MuiLink color="inherit" href="https://material-ui.com/">
      Your Website
    </MuiLink>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export const Index = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Box>
  </Container>
);

export default Index;
