import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  dropzone: {
    height: "200px",
    width: "200px",
    backgroundColor: theme.palette.custom.contrastText,
    border: "2px dashed rgb(187, 186, 186)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "12px",
    color: theme.palette.custom.primary,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
