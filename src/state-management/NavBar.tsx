import LoginStatus from "./auth/LoginStatus";
import { useTask } from "./task";

const NavBar = () => {
  const { tasks } = useTask();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
