import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserProfile } from "./pages/userProfile";
import { UpdateUser } from "./pages/updateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import { UserSessionContext } from "./pages/user-context";
import { TrainerSessionContext } from "./pages/coach-context";
import { CoachProfile } from "./pages/CoachProfile";
import { UpdateCoach } from "./pages/UpdateCoach";
import { UserExercise } from "./pages/UserExercise";
import { CoachExercise } from "./pages/CoachExercise";

function App() {
  const [user, setUser] = useState({});
  const [trainer, setTrainer] = useState({});

  function logInTrainer(trainerInfo) {
    setTrainer({
      photo: trainerInfo.photo,
      id: trainerInfo._id,
      name: trainerInfo.name,
      surname: trainerInfo.surname,
      email: trainerInfo.email,
      password: trainerInfo.password,
      phone: trainerInfo.phone,
      proficiency: trainerInfo.proficiency,
      experience: trainerInfo.experience,
      date: trainerInfo.date,
    });
  }

  function logIn(userInfo) {
    setUser({
      photo: userInfo.photo,
      id: userInfo._id,
      name: userInfo.name,
      surname: userInfo.surname,
      email: userInfo.email,
      password: userInfo.password,
      phone: userInfo.phone,
      gender: userInfo.gender,
      date: userInfo.date,
      mark: userInfo.mark,
    });
  }
  return (
    <UserSessionContext.Provider value={{ user, logIn }}>
      <TrainerSessionContext.Provider value={{ trainer, logInTrainer }}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/user">
                <UserProfile />
              </Route>
              <Route path="/userupdate">
                <UpdateUser />
              </Route>
              <Route path="/admin">
                <AdminPanel />
              </Route>
              <Route path="/coach">
                <CoachProfile />
              </Route>
              <Route path="/coachupdate">
                <UpdateCoach />
              </Route>
              <Route path="/userexercise">
                <UserExercise />
              </Route>
              <Route path="/coachexercise">
                <CoachExercise />
              </Route>
            </Switch>
          </div>
        </Router>
      </TrainerSessionContext.Provider>
    </UserSessionContext.Provider>
  );
}

export default App;
