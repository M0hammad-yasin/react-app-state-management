import { useReducer } from "react";
import "./App.css";
import LoginPage from "./routing/LoginPage";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/Reducers/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
}

export default App;
