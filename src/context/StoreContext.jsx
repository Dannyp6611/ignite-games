import { createContext, useReducer } from 'react';

import { POPULAR_GAMES } from '../api';

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload,
      };
    default:
      return state;
  }
};

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const loadGames = async () => {
    const response = await fetch(POPULAR_GAMES);
    const popularData = await response.json();
    dispatch({ type: 'FETCH_GAMES', payload: popularData.results });
  };

  return (
    <storeContext.Provider value={{ loadGames }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
