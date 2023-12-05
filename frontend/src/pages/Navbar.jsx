import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <Link className="link" to="/coach">
        My Profile
      </Link>
      <Link className="link" to="/coachexercise">
        Add Exercises
      </Link>
      <Link className="link" to="/coachnutrition">
        Add Nutrition
      </Link>
      <button onClick={() => history.push("/login")}>Log-out</button>
    </div>
  );
};
