import React from "react";
import { useStyles } from "./sign-up.styles";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../../common/copyright/Copyright";

const SignUp = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flext-end">
            <Grid item>
              <Link href="#r" variant="body2">
                Already have an accout? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
