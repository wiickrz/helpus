import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;

  label {
    color: var(--branco-1);
    font-size: 16px;
  }

  input {
    max-width: 100%;
    background-color: #cccccc;
    border: 2px solid
      ${(props) => (props.error ? "var(--vermelho-1)" : "#cccccc")};
    font-size: 18px;
    padding: 0 10px;
    font-weight: bold;
    color: var(--cinza-1);
    height: 45px;
    width: 100%;

    &:focus {
      border: 2px solid
        ${(props) => (props.error ? "var(--vermelho-1)" : "var(--azul-1)")};
    }

    &::placeholder {
      color: var(--cinza-1);
      font-weight: 400;
    }
  }
`;

export const Error = styled.span`
  color: var(--vermelho-1);
  font-size: 14px;
`;
