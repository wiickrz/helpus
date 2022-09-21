import logo from "../../assets/logo.png";
import { Button } from "../Button";
import * as S from "./style";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const HeaderCart = () => {
  return (
    <>
      <S.Box>
        <Link to="/">
          <S.LogoImg src={logo} alt="logo" />
        </Link>
        <FiShoppingCart
          style={{ color: "white", width: "40px", height: "30px" }}
        />
        <S.BoxButton>
          <Link to="/Login">
            <Button red style={{ color: "white", width: "100px" }}>
              Sair
            </Button>
          </Link>
        </S.BoxButton>
      </S.Box>
      <S.Line/>
    </>
  );
};
