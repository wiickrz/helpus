import logo from "../../assets/logo.png";
import { Button } from "../Button";
import * as S from "./style";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../Providers/Auth";
import { useCart } from "../../Providers/Cart";

export const HeaderCart = () => {
  const { logout } = useAuth();
  const { cart } = useCart();

  return (
    <>
      <S.Box>
        <Link to="/dashboard">
          <S.LogoImg src={logo} alt="logo" />
        </Link>
        <div>
          <Link to="/cart">
            <FiShoppingCart
              style={{ color: "white", width: "40px", height: "30px" }}
            />
          </Link>
          {cart.length > 0 && <S.Counter> {cart.length}</S.Counter>}
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
