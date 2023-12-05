import { NavbarUser } from "./NavbarUser";
import { useUserSession } from "./user-context";

export const UserNutrition = () => {
  const { user } = useUserSession();

  return (
    <div className="usercontainer">
      <NavbarUser />
      <div className="userProf">{user.name}</div>
    </div>
  );
};
