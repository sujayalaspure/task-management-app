import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import { DotsVerticalRounded } from "@emotion-icons/boxicons-regular";
import Text, { Heading } from "./Text";
import { useTheme } from "@material-ui/core";
const Card = ({ title, Icon, Count, Percent, desc }) => {
  const { palette } = useTheme();

  return (
    <Wrapper>
      <HeadingRow>
        <div>
          <IconButton Icon={Icon} tintColor={palette.primary.main} />
          <Text color={palette.text.hint}>{title}</Text>
        </div>
        <IconButton
          size={18}
          Icon={DotsVerticalRounded}
          tintColor={palette.primary.main}
        />
      </HeadingRow>
      <BottomSection>
        <Heading>{Count}</Heading>
        <Text
          variant="caption"
          color={Percent < 0 ? palette.accent.red : palette.accent.green}
        >
          {Percent}%
        </Text>
        <Text variant="body2">{desc}</Text>
      </BottomSection>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  /* min-height: 180px; */
  /* min-width: 300px; */
  border-radius: 16px;
  padding: 8px;
  border: 1px solid #bdbdbd;
  flex: 1;
  margin: 0 15px;
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    margin-right: -15px;
    /* color: green; */
  }
`;
