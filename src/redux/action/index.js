
// Actions
export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const toggleTodoAction= (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId
});

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});
