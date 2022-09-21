import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";

export const Providers = ({ children }) => {
  return (
    <MentorsProvider>
      <CoursesProvider>
        <DashboardProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </DashboardProvider>
      </CoursesProvider>
    </MentorsProvider>
  );
};
