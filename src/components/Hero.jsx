import {
  Avatar,
  Box,
  Button,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
  backgroundColor: "#FF6464",
  color: "white",
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "13px",
  textTransform: "none",
});

function Hero() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 16,
            gap: 8,
          }}
        >
          {/* Left Side Content  */}
          <Box sx={{ flex: 1, maxWidth: "600px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "48px",
                color: "black",
                lineHeight: 1.2,
                mb: 3,
                fontWeight: 800,
              }}
            >
              Hi, I am Faraz <br />
              Creative Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "black",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: "500px",
              }}
            >
              Crafting seamless web experiences with code and creativity. I
              build responsive, real-world interfaces using React, Vite, and
              modern UI logic—designed for impact and scalability.
            </Typography>

            <StyledButton disableRipple>Download Resume</StyledButton>
          </Box>

          {/* Right Side Content  */}

          <Box>
            <Avatar
              src="/src/assets/logo.png"
              alt="logo"
              sx={{ width: "250px", height: "250px", border: "3px solid #ccc" }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Hero;
