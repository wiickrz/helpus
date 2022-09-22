import * as S from "./style";
import coursesImg from "../../assets/courses.svg";
import { Header } from "../../Components/Header";
import { Profile } from "../../Components/Profile";
import { useCart } from "../../Providers/Cart";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "../../Components/Button";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <S.Box>
        <Profile />
        <S.DivText>Meus Produtos</S.DivText>
        <div style={{ width: "100px", height: "40px" }}></div>
      </S.Box>
      <S.Background>
        <S.Prods>
          <S.List>
            {[1, 2, 3].map(() => (
              <S.ItemList>
                <S.Img src={coursesImg} alt="Avatar" />
                <div style={{ color: "white" }}>
                  <h5 style={{ marginBottom: "5px" }}>Categoria</h5>
                  <h4>Nome Produto</h4>
                </div>
                <S.BoxValor>
                  <S.P>R$ 225,00</S.P>
                  <S.BoxClose >
                    <FaWindowClose style={{ color: "red" }} />
                  </S.BoxClose>
                </S.BoxValor>
              </S.ItemList>
            ))}
          </S.List>
          <S.BoxTotal>
            <h3 style={{ color: "white"}}>Total:</h3>{" "}
            <S.P>R$ 900,00</S.P>
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