import styled from "styled-components";

export const Container = styled.section`
  width: 230px;
  height: 280px;
  padding: 20px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cinza-1);
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 4px;
`;

export const Imagem = styled.img`
  width: 180px;
  height: 180px;
  margin: 0 auto 5px;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  color: var(--branco-1);
`;
export const Description = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--branco-1);
`;
