import { useState } from "react";

const AdminPanel = () => {
  const [selectedId, setSelectedID] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [roll, setRole] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const member = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      phone: e.target[4].value,
      date: e.target[5].value,
      gender: e.target[6].value,
      active: true,
      role: roll,
    };
    setIsOpen(!isOpen);
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
  };
  return (
    <div className="userContainer">
      <div className="leftbar">
        <button
          onClick={() => {
            togglePopup();
            setRole(0);
          }}
        >
          Add Coach
        </button>
        <button
          onClick={() => {
            togglePopup();
            setRole(1);
          }}
        >
          Add User
        </button>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="surname" />
              <input type="text" placeholder="email" />
              <input type="text" placeholder="password" />
              <input type="text" placeholder="phone" />
              <input type="date" name="date" />
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
