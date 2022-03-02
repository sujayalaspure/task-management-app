import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ bgColor }) =>
      bgColor
        ? theme.palette.background.paper
        : theme.palette.background.default,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1.5),
    minWidth: "unset",
  },
}));

const IconButton = ({ Icon, onClick, bgColor = false }) => {
  const classes = useStyles({ bgColor });
  return (
    <Button onClick={onClick ?? null} className={classes.root}>
      <Icon size={24} />
    </Button>
  );
};

export default IconButton;
