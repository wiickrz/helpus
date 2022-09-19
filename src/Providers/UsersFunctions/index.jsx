import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Api from "../../Services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@HelpUs: Token")) || ""
  );

  const user_id = token ? jwt_decode(token).user_id : "";

  const UserInfos = () => {
    let { user_id } = jwt_decode(token);
    Api.get(`/users/${user_id}/`).then((response) => setUser(response.data));
  };
  console.log(token);
  useEffect(() => {
    if (token) {
      UserInfos();
    }
  }, [token]);

  const UpdateUser = (data) => {
    Api.patch(`/users/${user_id}/`, data, {
      headers: { authorization: `Bearer ${token}` },
    }).then(() => {
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
