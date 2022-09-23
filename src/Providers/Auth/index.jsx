import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../Services/api.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const nav = useNavigate();

  const login = async (data) => {
    try {
      const { data: response } = await api.post("/login", data);
      console.log(data);
      console.log(response);

      setUser(response.user);
      api.defaults.headers.Authorization = `Bearer ${response.accessToken}`;

      localStorage.setItem("@HelpUs:user", JSON.stringify(response.user));
      localStorage.setItem("@HelpUs:token", response.accessToken);

      toast.success("Seja bem vindo !");
      nav("/dashboard");
    } catch (error) {
      toast.error("Não foi possível logar, tente novamente");
    }
  };

  const logout = () => {
    setUser(false);
    localStorage.clear();
    api.defaults.headers.Authorization = null;
  };

  const updateUser = (data) => {
    try {
      console.log(data);
      api.patch(`/users/${user.id}`, data);
      toast.success("Usuário atualizado");
      const { email, username } = data;
      setUser((prev) => ({ ...prev, email, username }));

      localStorage.setItem(
        "@HelpUs:user",
        JSON.stringify({ ...user, email, username })
      );
    } catch (error) {
      toast.error("Não foi possível atualizar, tente novamente");
    }
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem("@HelpUs:user");
    const storagedToken = localStorage.getItem("@HelpUs:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  const purchasesFilter = () => {
    const storagedToken = localStorage.getItem("@HelpUs:token");

    api
      .get(`/users/${user.id}?_embed=purchases`, {
        headers: {
          Authorization: `Bearer ${storagedToken}`,
        },
      })
      .then((response) => {
        setPurchases(response.data.purchases);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signed: Boolean(user),
        user,
        updateUser,
        purchasesFilter,
        purchases,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
