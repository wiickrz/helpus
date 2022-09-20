import logo from "../../assets/logo.png";
import { Button } from "../Button";
import * as S from "./style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <S.Box>
      <Link to="/">
        <S.LogoImg src={logo} alt="logo" />
      </Link>
      <S.BoxButton>
        <Link to="/login">
          <Button preto style={{ marginRight: "25px", border: "solid 2px" }}>
            Entrar
          </Button>
        </Link>
        <Link to="/register">
          <Button>Cadastrar</Button>
        </Link>
      </S.BoxButton>
    </S.Box>
    <S.Line/>
    </>
  );
};
