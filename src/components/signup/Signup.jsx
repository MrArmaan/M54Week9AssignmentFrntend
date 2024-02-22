import { useState } from "react";

import { signup } from "../../utils/fetch";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHander = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefaukt();
    console.log("hello from signup");
    await signup(username, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input
          placeholder="Username"
          onChange={(e) => changeHander(e, setUsername, username)}
        />
        <input
          placeholder="email"
          onChange={(e) => changeHander(e, setEmail, email)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHander(e, setPassword, password)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
