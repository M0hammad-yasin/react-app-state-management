import React, { Dispatch, useContext } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}
export const TaskContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
const useTask = () => useContext(TaskContext);
export default useTask;
