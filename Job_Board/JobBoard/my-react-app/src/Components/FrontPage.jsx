import React from "react";
import FrontPage1 from "./FrontPageChild1";
import SignUp from "./FrontPageChild2";
import Post from "./FrontPageChild3";
import Stats from "./FrontPageChild4";
import Footer from "./Footer";
import { Container } from "@mui/material";
import Header from "../Header";

export default function FrontPage() {
  return (
    <>
      <Header></Header>

      <Container>
        <FrontPage1 />
        {/* <SignUp /> */}
        <Post />
        <Stats />
      </Container>
      <Footer />
    </>
  );
}
