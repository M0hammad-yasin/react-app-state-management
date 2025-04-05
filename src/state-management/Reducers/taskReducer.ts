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
type ACTION = DELETE | ADD;

export default (state: Task[], action: ACTION): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((task) => action.taskId !== task.id);
    default:
      return state;
  }
};
