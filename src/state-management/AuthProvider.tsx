import React, { useReducer } from "react";
import AuthContext from "./contexts/authContext";
import authReducer from "./Reducers/authReducer";
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
