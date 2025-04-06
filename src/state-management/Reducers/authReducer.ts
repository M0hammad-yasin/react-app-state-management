interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;
export default (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.username); //return the username if login successful
    case "LOGOUT":
      return "";
    default:
      return ""; // return null if action type is neither LOGIN nor LOGOUT
  }
};
