import React, { Dispatch, useContext } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
  userName: string;
  dispatch: Dispatch<AuthAction>;
}
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
