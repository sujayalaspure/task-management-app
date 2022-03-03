import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    color: ({ color }) => (color ? color : theme.palette.text.primary),
  },
  text: {
    color: ({ color, fade }) =>
      color
        ? color
        : fade
        ? theme.palette.text.secondary
        : theme.palette.text.primary,
    fontSize: ({ fontSize }) => (fontSize ? fontSize : "1rem"),
    opacity: ({ fade, color }) => (color && fade ? 0.7 : 1),
  },
}));
export const Heading = ({ color, children, variant }) => {
  const classes = useStyles({ color });
  return (
    <Typography
      className={classes.heading}
      variant={variant ?? "h2"}
      // gutterBottom
    >
      {children}
    </Typography>
  );
};

const Text = ({
  fontSize,
  color,
  children,
  variant = "body1",
  fade,
  ...other
}) => {
  const classes = useStyles({ fontSize, color, fade });

  return (
    <Typography variant={variant} className={classes.text} {...other}>
      {children}
    </Typography>
  );
};

export default Text;
