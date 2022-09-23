import * as S from "./style";
import { Profile } from "../../Components/Profile";
import { HeaderCart } from "../../Components/HeaderCart";

export const MyCourses = () => {
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
            <h3 style={{ color: "white", margin: "30px" }}>
              Você ainda não tem mentorias
            </h3>
            <p style={{ color: "white", marginBottom: "30px" }}>
              Adquira mentorias
            </p>
          </S.List>
        </S.Prods>
      </S.Background>
    </>
  );
};
