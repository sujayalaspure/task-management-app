import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  height: 100%;
  /* background-color: red; */
`;

export const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const MiddleSection = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  gap: 30px;
`;

export const BottomSection = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: #9e9e9e;
`;
