import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { useUserSession } from "./user-context";
import { useTrainerSession } from "./coach-context";

export const Login = (props) => {
  const { logIn } = useUserSession();
  const { logInTrainer } = useTrainerSession();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let canlogUser = false;
    let canlogCoach = false;

    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        //data.user._id
        logIn(data.user);
        history.push("/user");
      } else {
        console.error("User Login failed");
        canlogUser = true;
      }
    } catch (error) {
      console.error("Error:", error);
    }
    if (canlogUser) {
      try {
        const response = await fetch("http://localhost:3000/coach/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const data = await response.json();
          //data.user._id
          logInTrainer(data.coach);
          history.push("/coach");
        } else {
          console.error("User Login failed");
          canlogCoach = true;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (canlogCoach) {
      try {
        const response = await fetch("http://localhost:3000/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const data = await response.json();
          //data.user._id
          history.push("/admin");
        } else {
          console.error("User Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="form-content">
      <h1>FitLife</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="mail" placeholder="E-mail" />
        <input type="text" placeholder="password" />
        <button type="submit">Log In</button>
      </form>
      <Link className="linkbtn" to="/register">
        Don't have an account? Register here.
      </Link>
    </div>
  );
};
