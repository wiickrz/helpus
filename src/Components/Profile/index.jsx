import * as S from "./style";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { ModalEditProfile } from "../ModalEditProfile";

export const Profile = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
        sx={{ width: 70, height: 70 }}
      >
        {updateUser ? <FaUserEdit /> : "W"}
      </Avatar>
      <S.Title>
        Olá,
        <span>William!</span>
      </S.Title>
      {!!openModal && <ModalEditProfile onClose={() => setOpenModal(false)} />}
    </S.Container>
  );
};
