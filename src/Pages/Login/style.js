//{}
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  display: none;
  @media (min-width: 1100px) {
    margin: 30px;
    color: var(--branco-1);
    display: flex;
    width: 100%;
    max-width: 65rem;
    text-align: center;
    background-size: contain;

    div {
      @media (min-width: 1100px) {
        width: 100%;
        flex-direction: column;

        h2 {
          font-size: 32px;
          margin-bottom: 2rem;
        }

        p {
          font-size: 20px;
          margin-bottom: 2rem;
        }

        img {
          @media (min-width: 1100px) {
            width: 100%;
            max-width: 60rem;
          }
        }
      }
    }
  }
`;

export const Box = styled.div`
  background: var(--cinza-1);
  max-width: 450px;
  width: 100%;
  margin: 10px;

  @media (min-width: 1100px) {
    margin: 5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    align-items: center;
  }
`;

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
    /* margin-bottom: 2rem; */
    font-size: 18px;
    padding: 0 10px;
    font-weight: bold;
    color: var(--cinza-1);
    height: 45px;

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

export const Password = styled(Input)`
  position: relative;
  flex-direction: column;
  justify-content: left;

  .innerContainer {
    position: relative;
  }

  input {
    padding-right: 15%;
    width: 100%;
  }
`;

export const Yey = styled.span`
  position: absolute;
  color: ${(props) => (props.error ? "var(--vermelho-1)" : "var(--cinza-1)")};
  opacity: 0.8;
  top: 55%;
  right: 15px;
  transform: translateY(-10%);
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Error = styled.span`
  color: var(--vermelho-1);
  font-size: 14px;
`;

export const Button = styled.button`
  background: var(--azul-1);
  height: 45px;
  width: 50%;
  color: var(--branco-1);
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const Login = styled.div`
  color: var(--branco-1);
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  letter-spacing: 2px;

  p {
    margin-top: 10px;
    font-size: 24px;
  }

  div {
    width: 100%;
    height: 1px;
    margin-top: 15px;
    background: #dfdfdf;
  }

  span {
    font-size: 18px;
    margin-top: 15px;

    a {
      color: var(--verde-1);
      text-decoration: none;
      font-size: 18px;
      margin-left: 5px;
    }
  }
`;
