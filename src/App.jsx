import React from "react";
import Demo from "./demo";
import { COLORS } from "./utils/colors";
import { useTheme } from "@material-ui/core/styles";
const App = () => {
  const theme = useTheme();

  console.log(theme.palette.accent);
  return (
    <div style={{ height: "100vh", backgroundColor: COLORS.bg.primary }}>
      Hello
      <Demo />
    </div>
  );
};

export default App;
