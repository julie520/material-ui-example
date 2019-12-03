import React, { Component } from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5"
      }
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h6" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" }
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true }
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      ))
    }
  }
};

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.state = { md: "" };
  }

  componentWillMount() {
    fetch(this.props.post)
      .then(res => res.text())
      .then(md => {
        this.setState({ md });
      });
  }

  render() {
    let { md } = this.state;

    return <ReactMarkdown options={options} children={md} />;
  }
}

export default Markdown;
