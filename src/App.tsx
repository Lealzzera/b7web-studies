import React from 'react'

type reducerState = {
  count: number;
}

type reducerAction = {
  type: string;

}

const App = () => {
  const initialState = { count: 0 };

  const reducer = (state: reducerState, action: reducerAction) => {
    return state
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>App</div>
  )
}

export default App