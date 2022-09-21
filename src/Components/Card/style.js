import styled from "styled-components";

export const Container = styled.section`
  width: 210px;
  height: 260px;
  padding: 20px 10px 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cinza-1);
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 4px;
`;

export const Imagem = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 10px;
`;

export const Name = styled.h3`
  max-width: 18ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-size: 0.9rem;
  color: var(--branco-1);
  margin-bottom: 8px;
`;
export const Description = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--branco-1);
`;
