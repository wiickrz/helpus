import { RegisterProvider } from "./Register";
import { UserProvider } from "./UsersFunctions";

export const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <UserProvider>{children}</UserProvider>
    </RegisterProvider>
  );
};
