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
    <AppBar position="relative">
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
            color="inherit"
            to="/blog"
            className={classes.link}
            component={Link}
          >
            Blog
          </MuiLink>
          <MuiLink
            variant="button"
            color="inherit"
            to="/album"
            className={classes.link}
            component={Link}
          >
            Album
          </MuiLink>
          <MuiLink
            variant="button"
            color="inherit"
            to="/pricing"
            className={classes.link}
            component={Link}
          >
            Pricing
          </MuiLink>
          <MuiLink
            variant="button"
            color="inherit"
            to="/checkout"
            className={classes.link}
            component={Link}
          >
            Checkout
          </MuiLink>
        </nav>
        <Button
          to="/signin"
          color="inherit"
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
