import { Container, Imagem, Name, Description } from "./style";
export const Card = ({ name, category, img, ...rest }) => {
  return (
    <Container {...rest}>
      <Imagem src={img} alt={name} />
      <Name>{name}</Name>
      <Description>{category}</Description>
    </Container>
  );
};
