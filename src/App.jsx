import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { AppWrapper, LeftSidebar, MiddleSection, RightSidebar } from "./style";
import SideBar from "./components/sidebar";
import MainApp from "./components/main-app";
const App = () => {
  const theme = useTheme();

  console.log(theme.palette.accent);
  return (
    <AppWrapper>
      <LeftSidebar>
        <SideBar />
      </LeftSidebar>
      <MiddleSection>
        <MainApp />
      </MiddleSection>
      <RightSidebar>right section</RightSidebar>
    </AppWrapper>
  );
};

export default App;
