import React from "react";
import Card from "../atoms/Card";
import { InfoWrapper } from "./style";
import { Folder, Stats, File } from "@emotion-icons/boxicons-regular";
const InfoSection = () => {
  return (
    <InfoWrapper>
      <Card
        title={"Task Completed"}
        Icon={Stats}
        desc={"from yesterday"}
        Count={12}
        Percent={3}
      />
      <Card
        title={"New Task Assigned "}
        Icon={File}
        desc={"from yesterday"}
        Count={14}
        Percent={-1.2}
      />
      <Card
        title={"Projects Completed "}
        Icon={Folder}
        desc={"from yesterday"}
        Count={10}
        Percent={10}
      />
    </InfoWrapper>
  );
};

export default InfoSection;
