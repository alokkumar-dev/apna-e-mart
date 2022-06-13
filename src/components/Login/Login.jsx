import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Redux/Login/Action";
import { useDispatch } from "react-redux";
const theme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
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

    // login flow complete, connect redux, isAuth and token store remaining

    axios
      .post("https://apna-mart-data.herokuapp.com/login", userDetails)
      .then((res) => {
        console.log(res.data);
        alert("Login Successful");
        dispatch(loginSuccess(res.data));
        localStorage.setItem("userDetails", JSON.stringify(res.data));
  
        setUserDetails({
          email: "",
          password: "",
        });

        // if (!bikeScheduleDetails){
        //   navigate("/");
        //   return
        // }

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ mt: 10 }}
      >
    
        <CssBaseline />
        <Box
          style={{ border: "1px solid black" }}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
  
          <Typography component="h1" variant="h4">
            Login
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
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
