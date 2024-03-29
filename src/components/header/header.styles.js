import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));
