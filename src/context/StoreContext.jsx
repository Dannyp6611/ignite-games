import { createContext, useReducer } from 'react';

import { POPULAR_GAMES_URL, UPCOMING_GAMES_URL, NEW_GAMES_URL } from '../api';

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
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    default:
      return state;
  }
};

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const loadGames = async () => {
    const popularResponse = await fetch(POPULAR_GAMES_URL);
    const popularData = await popularResponse.json();

    const upcomingResponse = await fetch(UPCOMING_GAMES_URL);
    const upcomingData = await upcomingResponse.json();

    const newGamesResponse = await fetch(NEW_GAMES_URL);
    const newGamesData = await newGamesResponse.json();

    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: popularData.results,
        upcoming: upcomingData.results,
        newGames: newGamesData.results,
      },
    });
  };

  return (
    <storeContext.Provider value={{ loadGames }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
