import { Contact } from "../../Components/Contact/index";
import { HeaderCart } from "../../Components/HeaderCart";
import { Profile } from "../../Components/Profile";
import { Container, Content, ContentProfile } from "./style.js";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export const PageContact = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Content>
                <HeaderCart />
                <ContentProfile>
                    <Profile />
                    <Button className="button" verde cadastroDesk onClick={() => navigate("/dashboard")}>Dashboard</Button>
                </ContentProfile>
                <Contact />
            </Content>  
        </Container>
    )
}