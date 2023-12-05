import { useTrainerSession } from "./coach-context";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

export const CoachExercise = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { trainer } = useTrainerSession();
  const [data, setData] = useState(null);
  const string = "http://localhost:3000/usercoach/userData/" + trainer.id;

  const togglePopup = async () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    showCoachsUsers();
  }, []);

  const addUsers = () => {
    // Eğer data null ise veya userIds boşsa, boş bir dizi döndür
    if (!data || !data.userIds || data.userIds.length === 0) {
      return <div>Users not found</div>;
    }

    // Kullanıcıları ekrana yazdır
    return (
      <div>
        {data.userIds.map((user) => (
          <div className="userList" key={user.id}>
            <div>
              <img src={user.photo} alt="user photo" />
            </div>
            <div>
              {user.name} {user.surname}
            </div>
            <div>
              <button
                value={user.id}
                onClick={() => {
                  togglePopup();
                }}
              >
                Add Exercise
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = () => {};

  const showCoachsUsers = async () => {
    try {
      const response = await fetch(string, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        console.error("User data fetch failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="usercontainer">
      <Navbar />
      <div className="userProf">
        <div>{addUsers()}</div>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <form className="modalform" onSubmit={handleSubmit}>
              <input type="text" placeholder="Exercise Name" />
              <input type="text" placeholder="Per Week" />
              <input type="text" placeholder="How Long" />

              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
