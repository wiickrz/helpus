import { useAuth } from "../Providers/Auth";
import { ProtectedRoutes } from "./protectedRoute";
import { UnprotectedRoutes } from "./unprotectedRoute";

export const AppRoutes = () => {
  const { signed } = useAuth();
  console.log(signed);
  return signed ? <ProtectedRoutes /> : <UnprotectedRoutes />;
};
