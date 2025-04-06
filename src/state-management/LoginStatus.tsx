import { useContext, useReducer, useState } from "react";
import authReducer from "./Reducers/authReducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const { userName, dispatch } = useContext(AuthContext);
  if (userName)
    return (
      <>
        <div>
          <span className="mx-2">{userName}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "yasin" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
