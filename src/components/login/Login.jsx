import { useState } from "react";
import { loginUser } from "../../utils/fetch";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser(username, password);
    setUsername(data.user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          placeholder="Email"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="Password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
