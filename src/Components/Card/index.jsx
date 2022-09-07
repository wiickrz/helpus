import { Container, Imagem, Name, Description } from "./style";
export const Card = ({ name, category, img }) => {
  return (
    <Container>
      <Imagem src={img} alt={name} />
      <Name>{name}</Name>
      <Description>{category}</Description>
    </Container>
  );
};
