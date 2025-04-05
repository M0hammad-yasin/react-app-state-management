import React from "react";
interface Action {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}
const countReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  return 1;
};

export default countReducer;
