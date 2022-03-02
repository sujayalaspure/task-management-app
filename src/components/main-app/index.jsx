import React from "react";
import Input from "../atoms/Input";
import Text, { Heading } from "../atoms/Text";
import {
  AppWrapper,
  TopBar,
  InputBaseWrapper,
  HeadingWrapper,
  Divider,
} from "./style";

const MainApp = () => {
  return (
    <AppWrapper>
      <TopBar>
        <HeadingWrapper>
          <Heading variant={"h5"}>My Projects</Heading>
          <Divider />
          <Text color={"#9e9e9e"}>8 Running Task</Text>
        </HeadingWrapper>

        <InputBaseWrapper className="input-base">
          <Input />
        </InputBaseWrapper>
      </TopBar>
    </AppWrapper>
  );
};

export default MainApp;
