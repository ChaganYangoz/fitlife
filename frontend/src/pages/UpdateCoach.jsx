import { useState, useEffect } from "react";
import { useTrainerSession } from "./coach-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UpdateCoach = () => {
  const history = useHistory();
  const { logInTrainer } = useTrainerSession();

  const { trainer } = useTrainerSession();

  const [name1, setName] = useState(trainer.name);
  const [surname1, setSurname] = useState(trainer.surname);
  const [email1, setEmail] = useState(trainer.email);
  const [password1, setPassword] = useState(trainer.password);
  const [phone1, setPhone] = useState(trainer.phone);
  const [date1, setDate] = useState(trainer.date);
  const [gender1, setGender] = useState(trainer.gender);
  const [image, setImage] = useState(trainer.photo);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  console.log(trainer);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const person = {
      photo: image,
      name: name1,
      surname: surname1,
      email: email1,
      password: password1,
      phone: phone1,
      date: date1,
      gender: gender1,
      experience: e.target[8].value,
      proficiency: e.target[9].value,
    };
    try {
      const response = await fetch("http://localhost:3000/coach/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: trainer.id, updatedData: person }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Coach updated:", data);
        logInTrainer(data.coach);
        history.push("/coach");
      } else {
        console.error("failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Photo:</label>
        <input type="file" onChange={onImageChange} className="filetype" />
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={name1}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Lastname:</label>
        <input
          type="text"
          value={surname1}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          value={email1}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password:</label>
        <input
          type="text"
          value={password1}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Phone:</label>
        <input
          type="text"
          value={phone1}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="">Birth Date:</label>
        <input
          type="date"
          value={date1}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="gender">Gender :</label>

        <select id="gender">
          <option value="male" selected={trainer.gender === "Male"}>
            Male
          </option>
          <option value="female" selected={trainer.gender === "Female"}>
            Female
          </option>
        </select>
        <label htmlFor="">Choose your experience:</label>
        <select name="mark" id="mark">
          <option
            selected={trainer.experience === "Gain Weight"}
            value="Gain Weight"
          >
            Gain Weight
          </option>

          <option
            selected={trainer.experience === "Loss Weight"}
            value="Loss Weight"
          >
            Lose Weight
          </option>
          <option
            selected={trainer.experience === "Maintain Weight"}
            value="Maintain Weight"
          >
            Maintain Weight
          </option>
          <option
            selected={trainer.experience === "Gain Muscle"}
            value="Gain Muscle"
          >
            Gain Muscle
          </option>
        </select>
        <input type="number" max={10} defaultValue={trainer.proficiency} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
