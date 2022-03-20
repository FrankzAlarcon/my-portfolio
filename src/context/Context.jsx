import React, { createContext } from 'react';
import { useInitialState } from '../hooks/useInitialState';

const context = createContext(null);
function ContextProvider({ children }) {
  const initialState = useInitialState();
  return (
    <context.Provider value={initialState}>{children}</context.Provider>
  );
}

export {
  context,
  ContextProvider,
};
