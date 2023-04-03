import { createContext, useReducer } from 'react';

import { POPULAR_GAMES } from '../api';

const initialState = {
  popularGames: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POPULAR':
      return {
        ...state,
        popularGames: action.payload,
      };
    default:
      return state;
  }
};

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const getPopularGames = async () => {
    const response = await fetch(POPULAR_GAMES);
    const data = await response.json();
    dispatch({ type: 'GET_POPULAR', payload: data });
  };

  return (
    <storeContext.Provider value={{ getPopularGames }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
