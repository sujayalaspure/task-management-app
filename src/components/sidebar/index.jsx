import React from "react";
import IconButton from "../atoms/IconButton";
import {
  Wrapper,
  BrandWrapper,
  MiddleSection,
  BottomSection,
  Divider,
} from "./style";
import { MicrosoftTeams } from "@emotion-icons/boxicons-logos";
import {
  MessageSquareDots,
  Folder,
  UserCircle,
  InfoCircle,
  MessageRoundedDots,
  LogOutCircle,
} from "@emotion-icons/boxicons-regular";
import { Gear } from "@emotion-icons/bootstrap";
import { useTheme } from "@material-ui/core";
const SideBar = () => {
  const { palette } = useTheme();
  return (
    <Wrapper>
      <BrandWrapper>
        <IconButton
          tintColor={"white"}
          Icon={MicrosoftTeams}
          bgColor={palette.primary.main}
        />
        <IconButton Icon={MessageSquareDots} />
        <Divider />
      </BrandWrapper>

      <MiddleSection>
        <IconButton Icon={Folder} />
        <IconButton Icon={UserCircle} />
        <IconButton Icon={InfoCircle} />
        <IconButton Icon={MessageRoundedDots} />
      </MiddleSection>

      <BottomSection>
        <IconButton Icon={Gear} />
        <IconButton Icon={LogOutCircle} />
      </BottomSection>
    </Wrapper>
  );
};

export default SideBar;
