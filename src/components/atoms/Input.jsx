import { IconButton, InputBase, Paper } from "@material-ui/core";
import React from "react";
import { Search } from "@emotion-icons/boxicons-regular";
import { makeStyles } from "@material-ui/core/styles";

const Input = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Search color={"#bdbdbd"} size={24} />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Type to search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#a399f733",
    border: 0,
    // width: "60%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
