const initialState = {
  todos: [
    { id: 1, value: "test1" },
    { id: 2, value: "test2" },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}


export default todoReducer;