import { AppBar, Container, Toolbar, Button, styled } from "@mui/material";
import { messages } from "../constants/message";

const NavButton = styled(Button)({
  color: "black",
  textTransform: "none",
});
function Header({ scrollRefs }) {
  const { postRef, contactRef, workRef } = scrollRefs;

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
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
            <NavButton onClick={() => scrollTo(workRef)} disableRipple>
              {messages.work}
            </NavButton>
            <NavButton onClick={() => scrollTo(postRef)} disableRipple>
              {messages.blog}
            </NavButton>
            <NavButton onClick={() => scrollTo(contactRef)} disableRipple>
              {messages.contact}
            </NavButton>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
