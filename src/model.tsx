export interface Todo {
  id: number;
  todo: string;
  isComplete: boolean;
}

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "update"; payload: string; id: number }
  | { type: "complete"; payload: number };

export const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isComplete: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "update":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, todo: action.payload } : todo
      );
    case "complete":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    default:
      return state;
  }
};
