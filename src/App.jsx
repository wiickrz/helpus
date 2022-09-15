import { GlobalStyle } from "./Styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./Routes/index";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./Components/Header";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header/>
    </>
  );
};
