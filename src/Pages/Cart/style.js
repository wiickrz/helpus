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
  cursor: pointer;
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
export const ItemList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  border-bottom: 1px solid white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxValor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 10px 0px 10px 0px;
  }
`;
export const Img = styled.img`
  height: 80px;
  width: 80px;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--verde-1);
  font-family: "Poppins";
  font-weight: 400;
  margin: 0px 50px 0px 50px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const BoxTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-right: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;

export const BoxClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    position: relative;
    bottom: 120px;
    left: 50px;
  }
`;
