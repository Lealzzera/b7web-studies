import { useReducer } from "react";

type reducerState = {
  count: number;
};

type reducerAction = {
  typeAction: string;
};

const initialState = {
  count: 0
};

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.typeAction) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
      break;
    case 'DEL':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      };
      break;
    case 'RESET':
      return initialState;
  }
  return state
}

export const useContagem = () => {
  return useReducer(reducer, initialState)
} 