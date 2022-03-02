import React from "react";
import { X, EmojiDizzy } from "@emotion-icons/bootstrap";
import MuiChip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";
import _ from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ bgColor }) => bgColor,
    borderRadius: 0.8 * theme.shape.borderRadius,
    minHeight: theme.spacing(4),
    color: theme.palette.text.light,
    transition: "300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "& .MuiChip-icon": {
      marginLeft: theme.spacing(1),
      color: theme.palette.text.light,
    },
    "& .MuiChip-deleteIcon": {
      color: theme.palette.text.light,
    },
    "&:hover": {
      backgroundColor: ({ bgColor }) => `${bgColor}`,
      opacity: 0.8,
    },
    "&:focus": {
      backgroundColor: ({ bgColor }) => bgColor,
    },
  },

  chipWithCount: {
    color: ({ color }) => (color ? color : _.sample(theme.palette.accent)),
    borderRadius: 0.8 * theme.shape.borderRadius,
    minHeight: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    padding: "12px 14px",
    margin: "0px 8px",
    display: "inline-flex",
    fontSize: "0.8125rem",
    boxSizing: "border-box",
    transition:
      "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    justifyContent: "center",
    textDecoration: "none",
    "& .label": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      paddingLeft: "12px",
      paddingRight: "12px",
      textOverflow: "ellipsis",
    },
    "& .count": {
      padding: "6px",
      borderRadius: "50%",
      fontSize: "0.7rem",
      fontWeight: "bold",
      backgroundColor: ({ color }) => color || _.sample(theme.palette.accent),
      color: theme.palette.text.light,
    },
  },
}));
const Chip = ({ bgColor, label, onDelete }) => {
  const theme = useTheme();
  const classes = useStyles({
    bgColor: bgColor || _.sample(theme.palette.accent),
  });
  return (
    <MuiChip
      className={classes.root}
      label={label}
      icon={<EmojiDizzy size={16} />}
      onClick={() => {}}
      // variant="outlined"
      // color="secondary"
      deleteIcon={<X />}
      onDelete={onDelete ? onDelete : undefined}
    />
  );
};

export const ChipWithCount = ({ color, label, count }) => {
  const classes = useStyles({ color });
  return (
    <div className={classes.chipWithCount}>
      <span className="label">{label}</span>
      <span className="count">{count}</span>
    </div>
  );
};

export default Chip;
