import RegisterImage from "../../assets/register.svg";
import * as S from "./style";
import { useState } from "react";

import { Link } from "react-router-dom";
import { TextField } from "../../Components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formSchema";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Header } from "../../Components/Header";
import { useAuth } from "../../Providers/Auth";

export const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.PageContainer>
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
          <form onSubmit={handleSubmit(login)}>
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
                  onClick={togglePassword}
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
    </S.PageContainer>
  );
};
