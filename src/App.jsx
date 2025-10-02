import React, { useRef } from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const postRef = useRef(null);
  const contactRef = useRef(null);
  const workRef = useRef(null);
  return (
    <>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <Container>
          <Header scrollRefs={{ postRef, contactRef, workRef }} />
          <Hero />
        </Container>

        <Posts ref={postRef} />
        <Work ref={workRef} />
        <Footer ref={contactRef} />
      </Box>
    </>
  );
}

export default App;
