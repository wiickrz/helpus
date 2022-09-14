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

export const CardProd = ({
  img,
  name,
  category,
  description,
  price,
  mentor,
}) => {
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
        <MentorName>Professor: {mentor}</MentorName>
        <div>//aqui serão colocados os componentes button</div>
      </InfoProductDescription>
    </Container>
  );
};
