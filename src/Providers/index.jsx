import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./UsersFunctions";
import { LoginProvider } from "./Login";

export const Providers = ({ children }) => {
  return (
    <>
      <MentorsProvider>
        <CoursesProvider>
          <DashboardProvider>
            <UserProvider>
              <LoginProvider>
                <RegisterProvider>{children}</RegisterProvider>
              </LoginProvider>
            </UserProvider>
          </DashboardProvider>
        </CoursesProvider>
      </MentorsProvider>
    </>
  );
};
