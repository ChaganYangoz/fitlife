import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const NavbarUser = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <Link className="link" to="/user">
        My Profile
      </Link>
      <Link className="link" to="/userexercise">
        My Exercises
      </Link>
      <Link className="link" to="/usernutrition">
        My Nutritions
      </Link>
      <button onClick={() => history.push("/login")}>Log-out</button>
    </div>
  );
};
