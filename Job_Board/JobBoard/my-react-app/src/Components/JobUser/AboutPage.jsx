import React from "react";
import UserNavBar from "./userNavbar";
import { Container } from "@mui/material";
import FrontPage1 from "../FrontPageChild1";
import Post from "../FrontPageChild3";
import Stats from "../FrontPageChild4";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
      <UserNavBar />
      <Container>
        <FrontPage1 />
        <Post />
        <Stats />
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
