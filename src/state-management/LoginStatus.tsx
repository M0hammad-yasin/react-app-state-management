import useAuth from "./hooks/useAuth";
const LoginStatus = () => {
  const { userName, dispatch } = useAuth();
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
