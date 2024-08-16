import React, { useContext, useState } from "react";
import {
  Paper,
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Admincontext } from "../../App";
import signupbg from "../../assets/signup.svg";

const defaultTheme = createTheme();

export default function UserSignup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUserNameContext } = useContext(Admincontext);

  const [fnErr, setFnErr] = useState(false);
  const [lnErr, setLnErr] = useState(false);
  const [unErr, setUnErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [conErr, setConErr] = useState(false);

  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      firstName === "" ? setFnErr(true) : setFnErr(false);
      lastName === "" ? setLnErr(true) : setLnErr(false);
      username === "" ? setUnErr(true) : setUnErr(false);
      password === "" ? setPassErr(true) : setPassErr(false);
      confirmPassword === "" ? setConErr(true) : setConErr(false);
      const user = await axios.get(
        `http://localhost:8080/user/get/${username}`
      );
      console.log(user);

      if (user.data != null) {
        setPasswordError("Username already exists");
      } else if (password !== confirmPassword) {
        setPasswordError("Password and Confirm Password are not the same");
      } else if (
        firstName !== "" &&
        lastName !== "" &&
        username !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword
      ) {
        const api = `http://localhost:8080/user/post`;
        await axios.post(api, {
          firstName: firstName + " " + lastName,
          username: username,
          password: password,
        });
        setUserNameContext(username);
        localStorage.setItem("username", username);
        navigate("/getjob");
      }
    } catch (error) {
      console.error("Error:", error);
      setPasswordError("An error occurred. Please try again");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src={signupbg}
            alt="Sign up visual"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "80%", // Adjust this as needed
              alignSelf: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
          }}
        >
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(e) => (
                        setFirstName(e.target.value), setFnErr(false)
                      )}
                      className="form-control"
                      error={fnErr}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      className="form-control"
                      autoComplete="family-name"
                      onChange={(e) => (
                        setLastName(e.target.value), setLnErr(false)
                      )}
                      error={lnErr}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      className="form-control"
                      autoComplete="username"
                      onChange={(e) => (
                        setUsername(e.target.value), setUnErr(false)
                      )}
                      error={unErr}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => (
                        setPassword(e.target.value), setPassErr(false)
                      )}
                      error={passErr}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      onChange={(e) => (
                        setConfirmPassword(e.target.value), setConErr(false)
                      )}
                      error={conErr}
                    />
                  </Grid>
                </Grid>

                <br />
                {passwordError && (
                  <Typography color="error">{passwordError}</Typography>
                )}
                <Link to="/user/login" className="text-blue-500">
                  Already registered..?Sign in
                </Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
