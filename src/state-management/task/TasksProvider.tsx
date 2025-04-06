import React, { useReducer } from "react";
import { TaskContext } from "./taskContext";

export interface Task {
  id: number;
  title: string;
}
interface DELETE {
  type: "DELETE";
  taskId: number;
}
interface ADD {
  type: "ADD";
  payload: Task;
}
export type TaskAction = DELETE | ADD;

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((task) => action.taskId !== task.id);
    default:
      return state;
  }
};
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
