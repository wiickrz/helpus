import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:token")) || ""
  );

  const { sub } = jwt_decode(token);

  const UserInfos = () => {
    let { sub } = jwt_decode(token);
    api
      .get(`/users/${sub}/`, { headers: { authorization: `Bearer ${token}` } })
      .then((response) => setUser(response.data));
  };
  console.log(token);
  useEffect(() => {
    if (token) {
      UserInfos();
    }
  }, [token]);

  const UpdateUser = (data) => {
    api
      .patch(`/users/${sub}/`, data, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        UserInfos();
        toast.success("Usuário atualizado");
      });
  };

  return (
    <UserContext.Provider
      value={{
        returnInfo,
        token,
        user,
        setUser,
        setToken,
        UserInfos,
        UpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
