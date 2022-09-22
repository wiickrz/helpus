import {
  ContentInput,
  ContentProducts,
  ContentUserInfo,
  UserLogo,
} from "../Dashboard/style";

import { Button } from "../../Components/Button";
import loginho from "../../assets/loginho.svg";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TextField } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCourses } from "../../Providers/Courses";
import { useDashboard } from "../../Providers/Dashboard";
import { Container } from "./style";
import { Product } from "../../Components/Product";
import { useCardProd } from "../../Providers/CardProd";
import { Card } from "../../Components/Card";
import { useMentors } from "../../Providers/Mentors";
import { HeaderCart } from "../../Components/HeaderCart";

export const CardProd = () => {
  const { courses } = useCourses();
  const { prod, handleClick } = useCardProd();
  const mentors = useMentors();
  const { register, handleSubmit } = useForm({});
  const [inputValue, setInputValue] = useState("");
  const [back, setBack] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
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
            <figure>
              <img src={loginho} alt="logo" />
            </figure>
            <div>
              <span>Olá,</span>
              <h2>User!</h2>
            </div>
          </UserLogo>
          <Button cadastroDesk onClick={() => handleSelectedCourse()}>
            Agendamento
          </Button>
          <Button verde cadastroDesk onClick={() => handleSelectedCourse()}>
            {selectedCourse ? "Curso" : "Meus cursos"}
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
          {selectedCourse ? (
            courseDashboard?.map((course) => {
              return (
                <Card
                  key={course.id}
                  name={course.name}
                  category={course.category}
                  img={loginho}
                />
              );
            })
          ) : filteredCourses.length > 0 ? (
            filteredCourses?.map((course) => {
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
          ) : (
            <Product
              key={prod.id}
              name={prod.name}
              category={prod.category}
              img={loginho}
              description={prod.description}
              price={prod.price}
              mentor={mentors?.map((mentor) => {
                return <option key={mentor.id}>{mentor.name}</option>;
              })}
            />
          )}
        </ContentProducts>
      </Container>
    </>
  );
};
