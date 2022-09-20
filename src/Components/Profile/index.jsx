import * as S from "./style";
import { Avatar } from "@mui/material";
import { useState, useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { ModalEditProfile } from "../ModalEditProfile";
import { UserContext } from "../../Providers/UsersFunctions";

export const Profile = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);

  const getUserLetters = () => {
    const fullName = user.username ? user.username.charAt(0) : "";
    return fullName.toUpperCase();
  };

  return (
    <S.Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
        sx={{ width: 70, height: 70 }}
      >
        {updateUser ? <FaUserEdit /> : <>{user && getUserLetters()}</>}
      </Avatar>
      <S.Title>
        Olá,
        <span>{user && user.username}!</span>
      </S.Title>
      {!!openModal && <ModalEditProfile onClose={() => setOpenModal(false)} />}
    </S.Container>
  );
};
