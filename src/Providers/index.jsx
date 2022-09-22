import { CardProdProvider } from "./CardProd";
import { CartProvider } from "./Cart";
import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <MentorsProvider>
        <CoursesProvider>
          <DashboardProvider>
            <CardProdProvider>
              <RegisterProvider>{children}</RegisterProvider>
            </CardProdProvider>
          </DashboardProvider>
        </CoursesProvider>
      </MentorsProvider>
    </CartProvider>
  );
};
