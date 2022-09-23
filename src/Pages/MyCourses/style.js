import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DivText = styled.div`
  background-color: #15cdca;
  width: 210px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const Prods = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  background-color: #404040;
  width: 90vw;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;
