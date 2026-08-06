import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { messages } from "../constants/message";

function Footer(props, ref) {
  const social = [
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: TwitterIcon, label: "Twitter" },
    { Icon: LinkedInIcon, label: "LinkedIn" },
  ];

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
      <Box sx={{ display: "flex", gap: 1 }}>
        {social.map(({ Icon, label }) => (
          <IconButton key={label} aria-label={label}>
            <Icon />
          </IconButton>
        ))}
      </Box>
      <Box mt={1}>
        <Typography variant="body1" sx={{ color: "#333", fontSize: "14px" }}>
          {messages.footer}
        </Typography>
      </Box>
    </Container>
  );
}

export default React.forwardRef(Footer);
