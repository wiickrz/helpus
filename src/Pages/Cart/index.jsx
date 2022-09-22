import * as S from "./style";
import coursesImg from "../../assets/courses.svg";
import { Profile } from "../../Components/Profile";
import { useCart } from "../../Providers/Cart";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { HeaderCart } from "../../Components/HeaderCart";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <HeaderCart />
      <S.Box>
        <Profile />
        <S.DivText>Meus Produtos</S.DivText>
        <div style={{ width: "100px", height: "40px" }}></div>
      </S.Box>
      <S.Background>
        <S.Prods>
          <S.List>
            {cart.length ? (
              cart.map(({ name, category, price }) => {
                return (
                  <S.ItemList>
                    <S.Img src={coursesImg} alt="Avatar" />
                    <div style={{ color: "white" }}>
                      <h5 style={{ marginBottom: "5px" }}>{category}</h5>
                      <h4>{name}</h4>
                    </div>
                    <S.BoxValor>
                      <S.P>R$ {price},00</S.P>
                      <S.BoxClose>
                        <FaWindowClose style={{ color: "red" }} />
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
                <p style={{ color: "white", marginBottom: "30px" }}>Adicione itens</p>
              </>
            )}
          </S.List>
          <S.BoxTotal>
            <h3 style={{ color: "white" }}>Total = </h3>
            <S.P>R${cart.reduce((c, p) => p.price + c, 0)},00</S.P>
            <Button
              style={{ width: "100px", height: "20px", fontSize: "14px" }}
            >
              Finalizar
            </Button>
          </S.BoxTotal>
        </S.Prods>
      </S.Background>
    </>
  );
};
