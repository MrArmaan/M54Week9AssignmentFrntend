import { useState } from "react";
import { loginUser } from "../../utils/fetch";
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(username, password);
      console.log("Response from backend:", data);

      if (data && data.user.id && data.user.username && data.user.email) {
        setShowSuccessMessage(true);
        setErrorMessage("");
      } else {
        console.log("Unexpected response from server:", data);
        console.log("ID:", data.user.id);
        console.log("Username:", data.user.username);
        console.log("Email:", data.user.email);
        throw new Error("Invalid response from the server");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const closePopup = () => {
    setShowSuccessMessage(false);
    setErrorMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => changeHandler(e, setUsername)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <button>Login</button>
      </form>
      {showSuccessMessage && (
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <p className="success-message">Login successful. Good luck!</p>
        </div>
      )}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
