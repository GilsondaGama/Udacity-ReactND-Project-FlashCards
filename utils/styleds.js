import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(0deg, #7c53c3 1%, #b93fb3 100%)",
    border: 0,
    fontSize: 16,
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
}));

export default function Theming() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
      teste2
    </button>
  );
}
