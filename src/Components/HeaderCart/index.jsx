import logo from "../../assets/logo.png";
import { Button } from "../Button";
import * as S from "./style";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../Providers/Auth";

export const HeaderCart = () => {
  const { logout } = useAuth();
  return (
    <>
      <S.Box>
        <Link to="/dashboard">
          <S.LogoImg src={logo} alt="logo" />
        </Link>
        <div>
          <FiShoppingCart
            style={{ color: "white", width: "40px", height: "30px" }}
          />
          <S.Counter>2</S.Counter>
        </div>
        <S.BoxButton>
          <Link to="/">
            <Button
              onClick={() => logout()}
              red
              style={{ color: "white", width: "100px" }}
            >
              Sair
            </Button>
          </Link>
        </S.BoxButton>
      </S.Box>
      <S.Line />
    </>
  );
};
