// Reducers la 1 function

const initValue = { value: 0 };
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'todoList/increment':
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

// Action
const INCREMENT = {
  type: 'todoList/increment',
  payload: 10,
};

// Action creator
const increamentCreator = (data) => {
  return {
    type: 'todoList/increment123',
    payload: data,
  };
};

increamentCreator(100);

// Dispatch
dispatch(INCREMENT);
