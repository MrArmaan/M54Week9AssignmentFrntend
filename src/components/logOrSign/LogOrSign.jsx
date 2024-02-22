import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <Signup />
      <Login />
    </div>
  );
};

export default LogOrSign;
