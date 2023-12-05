import { NavbarUser } from "./NavbarUser";
import { useUserSession } from "./user-context";

export const UserExercise = () => {
  const { user } = useUserSession();

  return (
    <div className="usercontainer">
      <NavbarUser />
      <div className="userProf">{user.name}</div>
    </div>
  );
};
