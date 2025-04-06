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
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
