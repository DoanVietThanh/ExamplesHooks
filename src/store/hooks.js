//Là file để lấy ra 'value' của 'Provider'
import { useContext } from 'react';
import Context from './Context';

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
