import RegisterImage from "../../assets/register.svg";
import * as S from "./style";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { TextField } from "../../Components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formSchema";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import { FiEyeOff, FiEye } from "react-icons/fi";
import jwtDecode from "jwt-decode";
import { Header } from "../../Components/Header";
import { PageContainer } from "./style";

export const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitCallback = (data) => {
    api
      .post("login/", data)
      .then((response) => {
        localStorage.clear();
        const token = response.data.accessToken;
        const { sub } = jwtDecode(token);
        console.log("Data", data);
        console.log("Token", token);

        localStorage.setItem("@HelpUs:token", JSON.stringify(token));
        localStorage.setItem("@HelpUs:user", JSON.stringify(sub));
        toast.success("Usuário logado com sucesso!");
        return nav("/dashboard");
      })
      .catch((error) => {
        toast.error("Usuário ou senha incorretos!");
      });
  };

  return (
    <>
      <PageContainer>
        <Header />
        <S.Container>
          <S.Background>
            <div>
              <h2>Help Us - Developers</h2>
              <p>
                <i>Ajudamos você a se tornar protagonista do seu código!</i>
              </p>
              <img src={RegisterImage} alt="Logo" />
            </div>
          </S.Background>
          <S.Box>
            <form onSubmit={handleSubmit(submitCallback)}>
              <TextField
                label="Usuário"
                type="text"
                name="email"
                placeholder="Seu nome de usuário"
                register={register}
                error={errors.email?.message}
              />
              <S.Password error={!!errors.password?.message}>
                <div className="innerContainer">
                  <label>Senha</label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Insira sua senha"
                    {...register("password")}
                  />
                  <S.Yey
                    error={!!errors.password?.message}
                    onClick={changePassword}
                  >
                    {" "}
                    {!showPassword ? <FiEyeOff /> : <FiEye />}{" "}
                  </S.Yey>
                </div>
                {!!errors && <S.Error>{errors.password?.message}</S.Error>}
              </S.Password>
              <S.Button type="submit">Login</S.Button>
              <S.Login>
                <p>ou</p>
                <div />
                <span>
                  <Link to="/register">
                    <i>cadastre-se</i>
                  </Link>
                </span>
              </S.Login>
            </form>
          </S.Box>
        </S.Container>
      </PageContainer>
    </>
  );
};
