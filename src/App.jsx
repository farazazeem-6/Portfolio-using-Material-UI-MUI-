import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
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
          <Header />
          <Hero />
        </Container>

        <Posts />
        <Work />
        <Footer />
      </Box>
    </>
  );
}

export default App;
