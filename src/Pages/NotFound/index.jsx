import { Header } from "../../Components/Header";
import { Container } from "./style";
import { PageContainer } from "../Login/style";

export const NotFound = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Container>
          <h1>404</h1>
          <h3>Page not foud</h3>
        </Container>
      </PageContainer>
    </>
  );
};
