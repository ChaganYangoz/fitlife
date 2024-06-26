import { useState, useEffect } from "react";
import { useUserSession } from "./user-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useTrainerSession } from "./coach-context";

const AdminPanel = () => {
  const { logIn } = useUserSession();
  const { logInTrainer } = useTrainerSession();

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const togglePopup = async () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    showAllCoaches();
  }, []);
  useEffect(() => {
    showAllUsers();
  }, []);
  const showAllCoaches = async () => {
    try {
      const response = await fetch("http://localhost:3000/coach/showall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData); // Veriyi state'e kaydet
      } else {
        console.error("User Reg failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/showall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setData1(responseData); // Veriyi state'e kaydet
        console.log(data1);
      } else {
        console.error("User Reg failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === "user") {
      const member = {
        name: e.target[0].value,
        surname: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
        phone: e.target[4].value,
        date: e.target[5].value,
        gender: e.target[6].value,
        mark: e.target[7].value,
        active: true,
      };
      try {
        const response = await fetch("http://localhost:3000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(member),
        });

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error("User Reg failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (role === "coach") {
      const coach = {
        name: e.target[0].value,
        surname: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
        phone: e.target[4].value,
        experience: e.target[5].value,
        proficiency: e.target[6].value,
      };
      try {
        const response = await fetch("http://localhost:3000/coach/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(coach),
        });

        if (response.ok) {
          const responsedata = await response.json();
          setData(responsedata);
        } else {
          console.error("User Reg failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    setIsOpen(!isOpen);
  };

  const userClick = (e) => {
    data1.users.map((user) => {
      if (user._id === e.target.value) {
        logIn(user);
        history.push("/userupdate");
      }
    });
  };

  const coachClick = (e) => {
    data.coaches.map((coach) => {
      if (coach._id === e.target.value) {
        logInTrainer(coach);
        history.push("/coachupdate");
      }
    });
  };

  return (
    <div className="userContainer">
      <div className="leftadminbar">
        <h2>Admin Panel</h2>
        <button
          onClick={() => {
            togglePopup();
            console.log(data);
            setRole("coach");
          }}
        >
          Add Coach
        </button>
        <button
          onClick={() => {
            togglePopup();
            setRole("user");
          }}
        >
          Add User
        </button>
        <button onClick={() => history.push("/login")}>Log-out</button>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <form className="modalform" onSubmit={handleSubmit}>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="surname" />
              <input type="text" placeholder="email" />
              <input type="text" placeholder="password" />
              <input type="text" placeholder="phone" />

              {role === "user" && (
                <>
                  <input type="date" name="date" />
                  <label htmlFor="gender">Gender:</label>
                  <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label htmlFor="mark">Choose your mark:</label>
                </>
              )}
              {role === "coach" && (
                <>
                  <label htmlFor="mark">Choose your experince:</label>
                </>
              )}
              <select name="mark" id="mark">
                <option value="Gain Weight">Gain Weight</option>
                <option value="Loss Weight">Lose Weight</option>
                <option value="Maintain Weight">Maintain Weight</option>
                <option value="Gain Muscle">Gain Muscle</option>
              </select>
              {role === "coach" && (
                <>
                  <label htmlFor="number">Proficiency</label>
                  <input type="number" max={10} />
                </>
              )}
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
      <div className="personcard">
        <>
          {data && (
            <>
              {data.coaches.map((coach) => (
                <div className="usercard" key={coach._id}>
                  {coach.name} {coach.surname} <br />
                  {coach.email}
                  <div>
                    <button value={coach._id} onClick={coachClick}>
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
        <>
          {data1 && (
            <>
              {data1.users.map((user) => (
                <div className="usercard" key={user._id}>
                  {user.name} {user.surname} <br />
                  {user.email}
                  <div>
                    <button value={user._id} onClick={userClick}>
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default AdminPanel;
