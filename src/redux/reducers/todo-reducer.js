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

    case "DELETE_TODO":
      const filteringTodo = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        state,
        todos: filteringTodo
      };

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

export function deleteTodo(id){
  return{
    type: "DELETE_TODO",
    payload: id
  }
}


export default todoReducer;
