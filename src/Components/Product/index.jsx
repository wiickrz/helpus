import { useCardProd } from "../../Providers/CardProd";
import { Button } from "../Button";
import {
  Category,
  Container,
  Description,
  Imagem,
  InfoProduct,
  InfoProductDescription,
  MentorName,
  Name,
  Price,
} from "./style";

export const Product = ({
  img,
  name,
  category,
  description,
  price,
  mentor,
}) => {
  const { functionBackDashboard, setMentor, handleClickCart } = useCardProd();
  return (
    <Container>
      <InfoProduct>
        <Imagem src={img} alt="image" />
        <Name>{name}</Name>
        <Category>{category}</Category>
      </InfoProduct>
      <InfoProductDescription>
        <Price>
          Apenas <span>R$ {price}</span>
        </Price>
        <Description>{description}</Description>
        <MentorName onChange={(event) => setMentor(event.target.value)}>
          {mentor}
        </MentorName>
        <div>
          <Button red onClick={() => functionBackDashboard()}>
            Voltar
          </Button>
          <div>
            <Button proDesk onClick={() => handleClickCart()}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </InfoProductDescription>
    </Container>
  );
};
