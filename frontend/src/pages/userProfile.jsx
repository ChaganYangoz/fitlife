import { useUserSession } from "./user-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export const UserProfile = () => {
  const { user } = useUserSession();
  const history = useHistory();
  const [datas, setDatas] = useState(null);

  /*useEffect(() => {
    showAllCoaches();
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
        setDatas(responseData);
      } else {
        console.error("User Reg failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    findCoachforme();
  };

  const findCoachforme = async () => {
    try {
      const fitting = datas.coaches.filter(
        (data) => user.mark === data.experience
      );

      let high = fitting[0];
      fitting.forEach((data) => {
        if (high.proficiency < data.proficiency) {
          high = data;
        }
      });

      const response = await fetch("http://localhost:3000/usercoach/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user.id, coach_id: high._id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("reletionship:", data);
      } else {
        console.error("Failed to add relationship");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };*/
  return (
    <div className="container">
      <div>
        <img className="pp" alt="preview image" src={user.photo} />
        <div>
          {user.name} <br />
          {user.surname} <br />
          {user.email} <br />
          {user.password} <br />
          {user.phone} <br />
          {user.date} <br />
          {user.gender}
        </div>
      </div>
      <button
        onClick={() => {
          history.push("/userupdate");
        }}
      >
        Update
      </button>
    </div>
  );
};
