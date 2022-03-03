import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const TopBar = styled.div`
  background-color: white;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const InputBaseWrapper = styled.div`
  flex: 0.6;
`;
export const HeadingWrapper = styled.div`
  /* flex: 0.8; */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: #9e9e9e;
`;

export const InfoWrapper = styled.div`
  background-color: white;
  padding: 15px 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
