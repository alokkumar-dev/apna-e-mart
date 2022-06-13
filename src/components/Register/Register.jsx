import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function Register() {
  const [userDetails, setUserDetails] = React.useState({
    name: "",
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

    axios
      .post("https://apna-mart-data.herokuapp.com/register", userDetails)
      .then((res) => {
        console.log(res.data);
        alert("Register Successful");
        setUserDetails({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Registeration Failed");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Registration
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography component="h1" variant="h6">
              Name
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              //   label="name"
              placeholder="enter your namer"
              type="text"
              id="name"
              autoComplete="name"
              onChange={handleChange}
            />
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
