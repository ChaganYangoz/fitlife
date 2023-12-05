import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <Link className="link" to="/coach">
        My Profile
      </Link>
      <Link className="link" to="/coachusers">
        My Users
      </Link>
      <Link className="link" to="/">
        Lorem, ipsum dolor.
      </Link>
      <button onClick={() => history.push("/login")}>Log-out</button>
    </div>
  );
};
