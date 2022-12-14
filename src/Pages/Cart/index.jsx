import * as S from "./style";
import coursesImg from "../../assets/courses.svg";
import { Profile } from "../../Components/Profile";
import { useCart } from "../../Providers/Cart";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { HeaderCart } from "../../Components/HeaderCart";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, handleRemoveClick, handleCompraFinalizada } = useCart();
  return (
    <>
      <HeaderCart />
      <S.Box>
        <Profile />
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <S.DivText>Dashboard</S.DivText>
        </Link>
        <div style={{ width: "100px", height: "40px" }}></div>
      </S.Box>
      <S.Background>
        <S.Prods>
          <S.List>
            {cart.length ? (
              cart.map(({ prod }, index) => {
                return (
                  <S.ItemList key={index}>
                    <S.Img src={coursesImg} alt="Avatar" />
                    <div style={{ color: "white" }}>
                      <h5 style={{ marginBottom: "5px" }}>{prod.category}</h5>
                      <h4>{prod.name}</h4>
                    </div>
                    <S.BoxValor>
                      <S.P>R$ {prod.price},00</S.P>
                      <S.BoxClose>
                        <FaWindowClose
                          onClick={() => handleRemoveClick(index)}
                          style={{ color: "red" }}
                        />
                      </S.BoxClose>
                    </S.BoxValor>
                  </S.ItemList>
                );
              })
            ) : (
              <>
                <h3 style={{ color: "white", margin: "30px" }}>
                  Seu carrinho está vazio
                </h3>
                <p style={{ color: "white", marginBottom: "30px" }}>
                  Adicione itens
                </p>
              </>
            )}
          </S.List>
          {cart.length ? (
            <S.BoxTotal>
              <h3 style={{ color: "white" }}>Total = </h3>
              <S.P>R${cart.reduce((c, p) => p.prod.price + c, 0)},00</S.P>
              <Button
                onClick={() => handleCompraFinalizada()}
                style={{ width: "100px", height: "20px", fontSize: "14px" }}
              >
                Finalizar
              </Button>
            </S.BoxTotal>
          ) : null}
        </S.Prods>
      </S.Background>
    </>
  );
};
