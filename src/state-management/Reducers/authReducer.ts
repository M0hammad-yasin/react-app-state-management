interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}
type Auth = Login | Logout;
export default (state: string, action: Auth): string => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.username); //return the username if login successful
    case "LOGOUT":
      return "";
    default:
      return ""; // return null if action type is neither LOGIN nor LOGOUT
  }
};
