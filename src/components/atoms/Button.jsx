import React from "react";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ bgColor }) =>
      bgColor ? bgColor : theme.palette.primary.main,
    color: theme.palette.text.light,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    width: "100%",
  },
}));
const Button = ({ children }) => {
  const classes = useStyles();
  return (
    <MuiButton variant="contained" color="primary" className={classes.root}>
      {children}
    </MuiButton>
  );
};

export default Button;
