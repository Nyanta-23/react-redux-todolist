const initialState = {
  todos: [
    {
      id: 1,
      todo: "text",
      completed: false,
    },
    {
      id: 2,
      todo: "text2",
      completed: false,
    },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), todo: action.payload, completed: false },
        ],
      };

    case "EDIT_TODO":
      

    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export default todoReducer;
