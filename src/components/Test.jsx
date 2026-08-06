import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  Avatar,
  styled,
} from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--primary)",
  color: "var(--bg)",
  padding: "12px 32px",
  fontSize: "16px",
  textTransform: "none",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "var(--accent)",
  },
}));

const NavButton = styled(Button)({
  color: "var(--text)",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 500,
  marginLeft: "32px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--primary)",
  },
});

export default function PortfolioHero() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      {/* Navigation */}
        <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end", py: 2 }}>
          <NavButton>Works</NavButton>
          <NavButton>Blog</NavButton>
          <NavButton>Contact</NavButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "calc(100vh - 100px)",
            py: 8,
            gap: 8,
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, maxWidth: "600px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", md: "48px" },
                fontWeight: 700,
                color: "var(--text-dark)",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: "500px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>

            <StyledButton variant="contained">Download Resume</StyledButton>
          </Box>

          {/* Right Content - Profile Image */}
          <Box
            sx={{
              flex: "0 0 auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="John"
              sx={{
                width: 280,
                height: 280,
                border: "8px solid var(--border)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
