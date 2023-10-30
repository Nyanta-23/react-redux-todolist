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
    {
      id: 3,
      todo: "text3",
      completed: true,
    },
  ],

  filter: "all",
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
      const filteringTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        state,
        todos: filteringTodo,
      };

    case "UPDATE_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todo: action.payload.todo,
            completed: action.payload.completed,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updatedTodos,
      };

    case "UPDATED_STATUS_TODO":
      const statusCompleted = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          console.log(todo.completed);
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: statusCompleted,
      };

    case "FILTER_TODO":
      return {
        ...state,
        filter: action.payload,
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

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function updateTodo(input) {
  return {
    type: "UPDATE_TODO",
    payload: input,
  };
}

export function isCompleted(id) {
  return {
    type: "UPDATED_STATUS_TODO",
    payload: id,
  };
}

export function filterTodo(action) {
  return {
    type: "FILTER_TODO",
    payload: action,
  };
}

export default todoReducer;
