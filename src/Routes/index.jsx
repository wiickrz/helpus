import { useAuth } from "../Providers/Auth";
import { ProtectedRoutes } from "./protectedRoute";
import { UnprotectedRoutes } from "./unprotectedRoute";

export const AppRoutes = () => {
  const { signed } = useAuth();
  return signed ? <ProtectedRoutes /> : <UnprotectedRoutes />;
};
