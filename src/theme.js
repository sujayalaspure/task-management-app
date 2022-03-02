import { createTheme } from "@material-ui/core/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#6E5EF5",
      light: "#a399f7",
      dark: "#5143b1",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#302E35",
      secondary: "#A0A7B2",
      disabled: "#bdbdbd",
      hint: "#9e9e9e",
      light: "#fafafa",
    },
    background: {
      paper: "#f5f5f5",
      main: "#fafafa",
      secondary: "#F6F7FB",
    },
    accent: {
      red: "#C01F1B",
      green: "#76C847",
      yellow: "#F0A838",
      skyblue: "#4EA3F2",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 400,
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
};

const theme = createTheme(themeOptions);

export default theme;
