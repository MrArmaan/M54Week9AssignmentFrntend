import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <img
        className="corner-images top-left"
        src="/pokeball.png"
        width="50px"
        height="50px"
      />
      <img
        className="corner-images top-right"
        src="/pokeball.png"
        width="50px"
        height="50px"
      />
      <Signup />
      <Login />
      <img
        className="corner-images bottom-left"
        src="/0001.png"
        width="50px"
        height="50px"
      />
      <img
        className="center-bottom-image"
        src="/0004.png"
        width="50px"
        height="50px"
      />
      <img
        className="corner-images bottom-right"
        src="/0007.png"
        width="50px"
        height="50px"
      />
    </div>
  );
};

export default LogOrSign;
