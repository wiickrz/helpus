import { Header } from "../../Components/Header";
import * as S from "./style";
import RegisterImage from "../../assets/register.svg";

export const Home = () => {
  return (
    <S.Box>
      <Header/>
      <S.Content>
        <h2 style={{marginTop:"70px"}}>Help Us - Developers</h2>
        <p style={{marginTop:"30px"}}>
          <i>Ajudamos você a se tornar protagonista do seu código!</i>
        </p>
        <img src={RegisterImage} alt="Logo" style={{marginTop:"50px"}}/>
      </S.Content>
    </S.Box>
  );
};
