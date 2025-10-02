import { AppBar, Container, Toolbar, Button, styled } from "@mui/material";
import React from "react";

const NavButton = styled(Button)({
  color: "black",
  textTransform: "none",
});
function Header() {
  return (
    <>
      <Container>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "white",
          }}
        >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <NavButton disableRipple>Work</NavButton>
            <NavButton disableRipple>Blog</NavButton>
            <NavButton disableRipple>Contact</NavButton>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
