import loginho from "../../assets/loginho.svg";
import { Button } from "../../Components/Button";
import { TextField } from "../../Components/Input";
import { Card } from "../../Components/Card";
import { CgSearch } from "react-icons/cg";
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

export const Dashboard = () => {
  const { courses } = useCourses();
  const { handleClick } = useCardProd();
  const [inputValue, setInputValue] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { register, handleSubmit } = useForm({});
  const { courseDashboard, selectedCourse, handleSelectedCourse } =
    useDashboard();

  const submitCallback = (inputValue) => {
    const filtrado = courses.filter((course) => {
      return course.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase();
    });
    setFilteredCourses(filtrado);
  };

  return (
    <Container>
      <ContentUserInfo>
        <UserLogo>
          <figure>
            <img src={loginho} alt="logo" />
          </figure>
          <div>
            <span>Olá,</span>
            <h2>User!</h2>
          </div>
        </UserLogo>
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
          <Button
            verde
            onClick={() => handleSubmit(submitCallback(inputValue))}
          >
            <CgSearch size={"25px"} />
          </Button>
        </ContentInput>
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
  );
};
