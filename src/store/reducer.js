import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  EDIT_INPUT_TODO,
  EDIT_TODO,
} from './constants';

const TODO_LIST_STORAGE_KEY = 'TODO_LIST';

const initState = {
  todos: JSON.parse(localStorage.getItem(TODO_LIST_STORAGE_KEY)) || [], //Chứa các todo (job) khi được thêm vào
  todoInput: '', //Chuỗi nhập từ bàn phím
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      const curI = action.payload[1];
      const curT = action.payload[0];
      const editT = [...state.todos];
      editT[curI] = curT;
      return {
        ...state,
        todos: editT,
      };

    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_INPUT_TODO:
      const curIndex = action.payload[1];
      const curTodo = action.payload[0];
      const editTodo = [...state.todos];
      editTodo[curIndex] = curTodo;
      return {
        ...state,
        todos: editTodo,
      };
    default: {
      throw new Error('Invalid action.');
    }
  }
}

export { initState };
export default reducer;
