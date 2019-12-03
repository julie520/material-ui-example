import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useStyles } from "./header-blog.styles";
import {
  Toolbar,
  Button,
  Typography,
  IconButton,
  Link as MuiLink
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const HeaderBlog = props => {
  const classes = useStyles();
  const { sections, title } = props;
  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" component={Link} to="/blog">
          Subscribe
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" component={Link} to="/signup">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <MuiLink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            className={classes.toolbarLink}
            component={Link}
          >
            {section.title}
          </MuiLink>
        ))}
      </Toolbar>
    </Fragment>
  );
};

HeaderBlog.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default HeaderBlog;
