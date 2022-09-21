import { CardProdProvider } from "./CardProd";
import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";

export const Providers = ({ children }) => {
  return (
    <>
      <MentorsProvider>
        <CoursesProvider>
          <CardProdProvider>
            <DashboardProvider>
              <RegisterProvider>{children}</RegisterProvider>
            </DashboardProvider>
          </CardProdProvider>
        </CoursesProvider>
      </MentorsProvider>
    </>
  );
};
