import React, { useReducer } from "react";
import AuthContext from "./authContext";
interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;
const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.username); //return the username if login successful
    case "LOGOUT":
      return "";
    default:
      return ""; // return null if action type is neither LOGIN nor LOGOUT
  }
};

interface Props {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ userName: user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
