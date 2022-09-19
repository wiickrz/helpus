import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./UsersFunctions";

export const Providers = ({ children }) => {
  return (
    <>
      <MentorsProvider>
        <CoursesProvider>
          <DashboardProvider>
            <UserProvider>
              <RegisterProvider>{children}</RegisterProvider>
            </UserProvider>
          </DashboardProvider>
        </CoursesProvider>
      </MentorsProvider>
    </>
  );
};
