import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "relative",
    background: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  genderContainer: {
    display: "flex",
    gap: "16px",
    marginTop: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

const Register = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
    mobile: "",
  });

  const handleUser = () => {
    // Implement your registration logic here
    console.log("User:", user);
  };

  const handleImageUpload = (e) => {
    // Handle image upload
  };

  return (
    <div className={classes.background}>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box className={classes.formContainer}>
            <Typography variant="h5">Register</Typography>
            <input
              accept="image/*"
              id="profile"
              name="profile"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label htmlFor="profile">
              <img
                src={user.profile || "default-avatar.jpg"}
                alt="Profile"
                className={classes.avatar}
              />
            </label>
            <form className={classes.form} method="post">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                id="name"
                name="name"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                id="email"
                name="email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                id="cpassword"
                name="cpassword"
                value={user.cpassword}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={user.gender}
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Contact"
                variant="outlined"
                fullWidth
                margin="normal"
                id="mobile"
                name="mobile"
                value={user.mobile}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.submitButton}
                onClick={handleUser}
              >
                Register
              </Button>
            </form>
            <div>
              <span>Already have an account?</span>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </div>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
