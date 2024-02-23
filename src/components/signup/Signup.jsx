import { useState } from "react";
import { signup } from "../../utils/fetch";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello from signup");
    await signup(username, email, password);
    setIsSignedUp(true);
    setShowSuccessMessage(true);
  };

  const closePopup = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => changeHandler(e, setUsername)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => changeHandler(e, setEmail)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <button type="submit">Signup</button>
      </form>
      {showSuccessMessage && (
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <p className="success-message">
            You have successfully signed up for the Pokemon League Challenge!
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
