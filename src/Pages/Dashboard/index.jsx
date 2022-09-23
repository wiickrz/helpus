import loginho from "../../assets/loginho.svg";
import { Button } from "../../Components/Button";
import { TextField } from "../../Components/Input";
import { Card } from "../../Components/Card";
import { HeaderCart } from "../../Components/HeaderCart";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Container,
  ContentInput,
  ContentProducts,
  ContentUserInfo,
  UserLogo,
} from "./style";
import { useCourses } from "../../Providers/Courses";
import { useDashboard } from "../../Providers/Dashboard";
import { useCardProd } from "../../Providers/CardProd";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Profile } from "../../Components/Profile";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { courses } = useCourses();
  const { handleClick } = useCardProd();
  const [inputValue, setInputValue] = useState("");
  const [back, setBack] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { register, handleSubmit } = useForm({});
  const { courseDashboard, selectedCourse, handleSelectedCourse } =
    useDashboard();

  const handleInput = (inputValue) => {
    const filtrado = courses.filter((course) => {
      return course.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase();
    });
    setFilteredCourses(filtrado);
    setBack(true);
  };

  const functionBack = () => {
    setBack(false);
    setFilteredCourses([]);
    setInputValue("");
  };

  return (
    <>
      <HeaderCart />
      <Container>
        <ContentUserInfo>
          <UserLogo>
            <Profile />
          </UserLogo>
          <Link to="/contact">
            <Button cadastroDesk>Agendamento</Button>
          </Link>
          <Button verde cadastroDesk onClick={() => handleSelectedCourse()}>
            {selectedCourse ? "Cursos" : "Meus cursos"}
          </Button>
          <ContentInput>
            <div>
              <TextField
                type="text"
                placeholder="Buscar cursos"
                name={"buscar cursos"}
                register={register}
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
              />
            </div>
            <Button verde onClick={() => handleSubmit(handleInput(inputValue))}>
              <CgSearch size={"25px"} />
            </Button>
          </ContentInput>
          {back && (
            <p onClick={() => functionBack()}>
              <IoIosArrowRoundBack size={"20px"} />
              Voltar
            </p>
          )}
        </ContentUserInfo>
        <ContentProducts>
          {selectedCourse
            ? courseDashboard?.map((course) => {
                return (
                  <Card
                    key={course.id}
                    name={course.name}
                    category={course.category}
                    img={loginho}
                  />
                );
              })
            : filteredCourses.length > 0
            ? filteredCourses?.map((course) => {
                return (
                  <Card
                    key={course.id}
                    name={course.name}
                    category={course.category}
                    img={loginho}
                    onClick={() => handleClick(course.id)}
                  />
                );
              })
            : courses?.map((course) => {
                return (
                  <Card
                    key={course.id}
                    name={course.name}
                    category={course.category}
                    img={loginho}
                    onClick={() => handleClick(course.id)}
                  />
                );
              })}
        </ContentProducts>
      </Container>
    </>
  );
};
