import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

function Footer(props, ref) {
  return (
    <Container
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ color: "#333", fontSize: "14px" }}>
          Copyright ©2020 All rights reserved
        </Typography>
      </Box>
    </Container>
  );
}

export default React.forwardRef(Footer);
