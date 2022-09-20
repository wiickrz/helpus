import * as S from "./style";
import { useState, useContext } from "react";
import { FiEyeOff, FiEye, FiX } from "react-icons/fi";
import { UserContext } from "../../Providers/UsersFunctions";
import { useForm } from "react-hook-form";
import { Avatar } from "@mui/material";

export const ModalEditProfile = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { UpdateUser, UserInfos, user } = useContext(UserContext);
  const [username, setUser] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitFunction = (data) => {
    console.log(data);
    UserInfos();
    UpdateUser({ username, email, password });
    onClose();
  };

  const changePassword = () => {
    setShowPassword(!showPassword);
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
              <Avatar sx={{ width: 200, height: 200 }} />
              <p>Willian</p>
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
              <S.Password>
                <div className="innerContainer">
                  <label>Senha</label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Altere sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <S.Yey onClick={changePassword}>
                    {" "}
                    {!showPassword ? <FiEyeOff /> : <FiEye />}{" "}
                  </S.Yey>
                </div>
              </S.Password>
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
