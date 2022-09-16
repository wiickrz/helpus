import logo from "../../assets/logo.png";
import { Button } from "../Button";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Box>
      <S.LogoImg src={logo} alt="logo" />
      <S.BoxButton>
        <Button preto style={{ marginRight: "25px", border: "solid 2px" }}>
          Entrar
        </Button>
        <Button>Cadastrar</Button>
      </S.BoxButton>
    </S.Box>
  );
};
