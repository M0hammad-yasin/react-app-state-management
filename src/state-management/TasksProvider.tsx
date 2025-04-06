import React, { useReducer } from "react";
import taskReducer from "./Reducers/taskReducer";
import TaskContext from "./contexts/taskContext";
interface Props {
  children: React.ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
