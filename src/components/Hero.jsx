import {
  Avatar,
  Box,
  Button,
  Container,
  styled,
  Typography,
} from "@mui/material";
import { messages } from "../constants/message";

const StyledButton = styled(Button)({
  backgroundColor: "var(--primary)",
  color: "var(--bg)",
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
            <Typography variant="h1" sx={{ fontSize: "48px", color: "var(--text-dark)", lineHeight: 1.2, mb: 3, fontWeight: 800 }}>
              Hi, I am Faraz <br />
              Creative Web Developer
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", color: "var(--text-dark)", lineHeight: 1.8, mb: 4, maxWidth: "500px" }}>
              {messages.detail}
            </Typography>

            <StyledButton disableRipple>{messages.downloadResume}</StyledButton>
          </Box>

          {/* Right Side Content  */}

          <Box>
            <Avatar src="/src/assets/logo.png" alt="logo" sx={{ width: "250px", height: "250px", border: "3px solid var(--border-2)" }} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Hero;
