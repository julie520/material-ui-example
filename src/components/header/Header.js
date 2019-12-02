import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Button
} from "@material-ui/core";
import { useStyles } from "./header.styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          JulieWith.me
        </Typography>
        <nav>
          <MuiLink
            variant="button"
            color="textPrimary"
            to="/"
            className={classes.link}
            component={Link}
          >
            Features
          </MuiLink>
          <MuiLink
            variant="button"
            color="textPrimary"
            to="/"
            className={classes.link}
            component={Link}
          >
            Enterprise
          </MuiLink>
          <MuiLink
            variant="button"
            color="textPrimary"
            to="/checkout"
            className={classes.link}
            component={Link}
          >
            Checkout
          </MuiLink>
        </nav>
        <Button
          to="/signin"
          color="primary"
          variant="outlined"
          className={classes.link}
          component={Link}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
