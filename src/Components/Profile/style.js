import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Title = styled.h1`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--branco-1);
  margin-left: 10px;

  span {
    font-size: 28px;
  }
`;
