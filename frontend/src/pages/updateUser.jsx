import { useState, useEffect } from "react";
import { useUserSession } from "./user-context";

export const UpdateUser = () => {
  const { user } = useUserSession();

  const [name1, setName] = useState(user.name);
  const [surname1, setSurname] = useState(user.surname);
  const [email1, setEmail] = useState(user.email);
  const [password1, setPassword] = useState(user.password);
  const [phone1, setPhone] = useState(user.phone);
  const [date1, setDate] = useState(user.date);
  const [gender1, setGender] = useState(user.gender);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const member = {
      name: name1,
      surname: surname1,
      email: email1,
      password: password1,
      phone: phone1,
      date: date1,
      gender: gender1,
    };
    try {
      const response = await fetch("http://localhost:3000/users/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: user.id, updatedData: member }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User updated:", data);
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
          <option value="male" selected={user.gender === "Male"}>
            Male
          </option>
          <option value="female" selected={user.gender === "Female"}>
            Female
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
