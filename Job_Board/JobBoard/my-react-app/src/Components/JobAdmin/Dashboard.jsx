import React, { useContext } from "react";
import SideNavInDashboard from "./SideNavInDashboard";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
// import Jobs from "./JobsPosted";
import Cart from "./Cart";
import { Admincontext } from "../../App";
export default function DashBoard() {
  const {companyname} = useContext(Admincontext);
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginLeft: "0px" }}>
          <SideNavInDashboard />
        </Box>
        <Box
          sx={{
            // border: "2px solid black",
            width: "150vh",
            height: "90vh",
            margin: "10px 0px 0px 10px",
          }}
        >
          <Cart />
        </Box>
      </Box>
    </>
  );
}
