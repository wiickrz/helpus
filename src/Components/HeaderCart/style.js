import styled from "styled-components";

export const Box = styled.div`
  min-width: 375px;
  height: 80px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxButton = styled.div`
  margin-right: 25px;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 25px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100vw;
  background-color: white;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 15px;
  position: relative;
  bottom: 40px;
  left: 30px;
  border-radius: 100%;
  background-color: #15CDCA;
  font-size: 12px;
  color: white;
  font-weight: bold;
`;
