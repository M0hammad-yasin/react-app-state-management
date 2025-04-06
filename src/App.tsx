import { useReducer } from "react";
import "./App.css";
import LoginPage from "./routing/LoginPage";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/Reducers/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/Reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      <AuthContext.Provider value={{ userName: user, dispatch: authDispatch }}>
        <NavBar />
        <HomePage />
      </AuthContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
