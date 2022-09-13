import * as S from "./style";
import * as yup from "yup";
import RegisterImage from "../../assets/register.svg";
import { TextField } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../Providers/register";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const passRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?/+-])[0-9a-zA-Z$*&@#?/+-]{6,}$/;

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatorio!"),
    password: yup
      .string()
      .trim()
      .required("Campo Obrigatorio!")
      .min(6, "A senha precisa ter no mínimo 6 caracteres.")
      .matches(
        passRegex,
        "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
      ),
    passwordConf: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  const changePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const { createUser } = useContext(RegisterContext);

  const handleRegister = (data, e) => {
    e.preventDefault();
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    createUser(newData);
  };

  return (
    <>
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <TextField
              label="Nome"
              type="name"
              register={register}
              name="name"
              placeholder="Insira seu nome completo"
              error={errors.name?.message}
            />
            <TextField
              label="Email"
              type="email"
              register={register}
              name="email"
              placeholder="Insira seu email"
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

            <S.Password error={!!errors.passwordConf?.message}>
              <div className="innerContainer">
                <label>Confirmação de Senha</label>
                <input
                  name="passwordConf"
                  type={showPasswordTwo ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  {...register("passwordConf")}
                />
                <S.Yey
                  error={!!errors.passwordConf?.message}
                  onClick={changePasswordTwo}
                >
                  {" "}
                  {!showPasswordTwo ? <FiEyeOff /> : <FiEye />}{" "}
                </S.Yey>
              </div>
              {!!errors && <S.Error>{errors.passwordConf?.message}</S.Error>}
            </S.Password>

            <S.Button type="submit">Cadastrar</S.Button>
            <S.Login>
              <p>ou</p>
              <div />
              <span>
                se já possui uma conta, faça o{" "}
                <Link to="/login">
                  <i>login</i>
                </Link>
                .
              </span>
            </S.Login>
          </form>
        </S.Box>
      </S.Container>
    </>
  );
};
