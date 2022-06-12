import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    // register flow complete, connect redux store remaining

    axios
      .post("http://localhost:3001/register", userDetails)
      .then((res) => {
        console.log(res.data);
        alert("Register Successful");
        setUserDetails({
          email: "",
          phone: "",
          password: "",
        });
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
        <Typography
          component="h1"
          variant="h5"
          textAlign={"center"}
          color={"#049fe2"}
          fontWeight={"600"}
        >
          APNA E MART
        </Typography>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography component="h1" variant="h6">
              Email id
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              //   label="Email Address"
              placeholder="enter your email id"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <Typography component="h1" variant="h6">
              Phone Number
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              //   label="Password"
              placeholder="enter your phone number"
              type="tel"
              id="phone"
              autoComplete="phone"
              onChange={handleChange}
            />
            <Typography component="h1" variant="h6">
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              //   label="Password"
              placeholder="enter your password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 2, backgroundColor: "#049fe2" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
