import React from "react";
import { Folder, Group } from "@emotion-icons/boxicons-regular";

import IconButton from "../components/atoms/IconButton";
import Text, { Heading } from "../components/atoms/Text";
import Button from "../components/atoms/Button";
import Chip, { ChipWithCount } from "../components/atoms/Chip";

import { useTheme } from "@material-ui/core/styles";
import InfoCard from "../components/InfoCard";
const Demo = () => {
  const theme = useTheme();
  return (
    <div>
      <ChipWithCount
        label={"Completed"}
        count={12}
        color={theme.palette.accent.green}
      />
      <IconButton Icon={Folder} />
      <IconButton Icon={Group} />
      <IconButton Icon={Folder} />
      {/* <div>
        IconButton:
        
      </div> */}
      <Chip label={"Daily Stand Up"} onDelete={() => {}} />

      <div>
        <Heading>Heading:</Heading>
        <Text>Text:</Text>
      </div>

      <div style={{ width: "200px" }}>
        <Button>Create New Task</Button>
      </div>
      {/*
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Chip label={"Daily Stand Up"} onDelete={() => {}} />
        <br />
      </div>
      <ChipWithCount
        label={"Backlog"}
        count={12}
        color={theme.palette.accent.red}
      />
      <ChipWithCount
        label={"In Progress"}
        count={12}
        color={theme.palette.accent.yellow}
      />
      <ChipWithCount
        label={"Completed"}
        count={12}
        color={theme.palette.accent.green}
      />

      <div>
        <InfoCard />
      </div> */}
    </div>
  );
};

export default Demo;
