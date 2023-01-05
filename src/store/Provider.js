import Context from './Context';
import reducer, { initState } from './reducer';
import React, { useReducer } from 'react';
import logger from './logger';

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;

// dùng useReducer vì cấu trúc biến toàn cục phức tạp và tiện quản lí
