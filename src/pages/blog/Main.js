import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./main.styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import Markdown from "./Markdown";

const Main = props => {
  const classes = useStyles();
  const { posts, title } = props;
  console.log(posts[0]);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <Markdown
          className={classes.markdown}
          key={post.substring(0, 40)}
          post={post}
        >
          {/* {post} */}
        </Markdown>
      ))}
      {/* <Markdown read={posts[1]} /> */}
    </Grid>
  );
};

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string
};

export default Main;
