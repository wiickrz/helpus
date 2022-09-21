import * as S from "./style";
import { useState } from "react";
import { FiEyeOff, FiEye, FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Avatar } from "@mui/material";
import { useAuth } from "../../Providers/Auth";

export const ModalEditProfile = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser, user } = useAuth();
  const [username, setUser] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitFunction = (data) => {
    console.log(data);
    updateUser({ username, email, password });
    onClose();
  };

  // const changePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const getUserLetters = () => {
    const fullName = user.username ? user.username.charAt(0) : "";
    return fullName.toUpperCase();
  };

  return (
    <>
      <S.Container open>
        <S.Box>
          <S.Header>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.User>
            <S.ImageUser>
              <Avatar sx={{ width: 180, height: 180, fontSize: 100 }}>
                {getUserLetters()}
              </Avatar>
              <p>{user && user.username.toUpperCase()}</p>
            </S.ImageUser>
            <S.Form onSubmit={handleSubmit(onSubmitFunction)}>
              <S.Input>
                <label>Nome de usuário</label>
                <input
                  type="name"
                  placeholder={user.username}
                  onChange={(e) => setUser(e.target.value)}
                />
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </S.Input>
              {/* <S.Password>
                <div className="innerContainer">
                  <label>Senha</label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Altere sua senha"
                    onChange={(e) => {
                      user.password && setPassword(e.target.value);
                    }}
                  />
                  <S.Yey onClick={changePassword}>
                    {" "}
                    {!showPassword ? <FiEyeOff /> : <FiEye />}{" "}
                  </S.Yey>
                </div>
              </S.Password> */}
              <S.BoxButton>
                <S.Button type="submit">Salvar</S.Button>
              </S.BoxButton>
            </S.Form>
          </S.User>
        </S.Box>
      </S.Container>
    </>
  );
};
