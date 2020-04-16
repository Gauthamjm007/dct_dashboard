import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    borderRadius: "20",
    boxShadow:
      "0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
  },
  route: {
    textDecoration: "none",
    color: theme.palette.contrastText,
  },
}));
