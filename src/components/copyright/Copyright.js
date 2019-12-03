import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright &copy;{" "}
      <Link color="inherit" href="https://material-ui.com">
        JulieWith.me
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
