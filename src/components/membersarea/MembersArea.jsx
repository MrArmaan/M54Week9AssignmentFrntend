import { useState } from "react";
import { getAllUsers } from "../../utils/fetch";

const MembersArea = () => {
  const [challengers, setChallengers] = useState([]);

  const handleGetChallengers = async () => {
    try {
      const users = await getAllUsers();
      setChallengers(users);
    } catch (error) {
      console.error("Error fetching challengers:", error);
    }
  };

  return (
    <div>
      <h3>Welcome to the Members Area!</h3>
      <p>This area is exclusively for our members.</p>
      <button onClick={handleGetChallengers}>See Current Challengers</button>
      {challengers.length > 0 && (
        <div>
          <h4>Current Challengers:</h4>
          <ul>
            {challengers.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MembersArea;
