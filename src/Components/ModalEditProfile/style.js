import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;

export const Box = styled.div`
  max-width: 700px;
  width: 100%;
  background: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  margin: 10px;

  @media (max-width: 580px) {
    margin: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Close = styled.span`
  background: var(--vermelho-1);
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--vermelho-1);
  margin-bottom: 25px;

  &:hover {
    opacity: 0.3;
  }

  @media (max-width: 580px) {
    margin-bottom: 0;
  }
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const ImageUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 200px;
    width: 100%;

    @media (max-width: 580px) {
      max-width: 150px;
    }
  }

  p {
    margin-top: 10px;
    font-size: 28px;
    color: #ffffff;

    @media (max-width: 580px) {
      margin-bottom: 10px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: var(--branco-1);
    font-size: 16px;
  }

  input {
    max-width: 100%;
    background-color: #cccccc;
    border: 2px solid #cccccc;
    font-size: 18px;
    padding: 0 10px;
    font-weight: bold;
    color: var(--cinza-1);
    height: 45px;
    margin-bottom: 1.5rem;

    &:focus {
      border: 2px solid var(--azul-1);
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
  color: var(--cinza-1);
  opacity: 0.8;
  top: 40%;
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

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  background: #3e54d3;
  color: #ffffff;
  font-size: 20px;
  padding: 5px 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
