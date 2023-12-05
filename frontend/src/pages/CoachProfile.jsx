import { useTrainerSession } from "./coach-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "./Navbar";

export const CoachProfile = () => {
  const { trainer } = useTrainerSession();
  const history = useHistory();

  return (
    <div className="sidebox">
      <Navbar />
      <div className="midbar">
        <img className="pp" alt="preview image" src={trainer.photo} />

        <div>
          {trainer.name} <br />
          {trainer.surname} <br />
          {trainer.email} <br />
          {trainer.password} <br />
          {trainer.phone} <br />
          {trainer.date} <br />
          {trainer.gender} <br />
          {trainer.proficiency} <br />
          {trainer.experience}
        </div>
        <button
          onClick={() => {
            history.push("/coachupdate");
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
