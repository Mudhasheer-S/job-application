import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import homepagegif from "./images/homepagegif.gif";
import Navbar from "./Navbar";
import Footer from "../Footer";

function Home() {
  const usenavigate = useNavigate();

  const handlePostButton = () => {
    usenavigate("/post/form");
  };

  return (
    <>
      <Navbar />

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          padding: "5vh",
        }}
      >
        <Box
          sx={{
            height: "70vh",
            width: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" sx={{ fontStyle: "italic" }}>
            Let's hire your next great candidate. <span>Fast.</span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              width: "50vh",
              height: "8vh",
              marginTop: "5vh",
              fontSize: "25px",
            }}
            onClick={handlePostButton}
          >
            Post a Job
          </Button>
        </Box>
        <Box sx={{ height: "80vh", width: "100vh", padding: "50px" }}>
          <Box
            sx={{
              height: "69vh",
              width: "69vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={homepagegif}
              alt="gif"
              style={{ height: "550px", maxWidth: "none" }}
            ></img>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
