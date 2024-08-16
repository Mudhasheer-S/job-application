import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import formgif from "../JobAdmin/images/business-deal.png"
import Navbar from "./Navbar";

export default function JobPostPage(){

    return(
        <>
            <Navbar />
            <Container sx={{height:"100vh" , width:"100vh" , padding:"0px",paddingBlock:""}}>
                <img src={formgif} height="30px"></img>
                <Typography variant="h6" sx={{fontSize:"30px",margin:"0px",lineHeight:"1.2"}} >You haven't posted a job before, so you'll need to create an employer account.</Typography>
                <Box>
                    <Typography  variant="h6">Job Title <span style={{color:"red" }}>*</span></Typography>
                    <TextField variant="outlined" sx={{width:"100vh",'& .MuiInputBase-root': {height: 45}}} />
                </Box>
                <Box>
                    <Typography  variant="h6">Job Title <span style={{color:"red" }}>*</span></Typography>
                    <TextField variant="outlined" sx={{width:"100vh",'& .MuiInputBase-root': {height: 45}}} />   
                </Box>
                <Box>
                    <Typography  variant="h6">Job Title <span style={{color:"red" }}>*</span></Typography>
                    <TextField variant="outlined" sx={{width:"100vh",'& .MuiInputBase-root': {height: 45}}} />   
                </Box>
                <Box>
                    <Typography  variant="h6">Job Title <span style={{color:"red" }}>*</span></Typography>
                    <TextField variant="outlined" sx={{width:"100vh",'& .MuiInputBase-root': {height: 45}}} />   
                </Box>
                
            </Container> 
        </>
    )
}