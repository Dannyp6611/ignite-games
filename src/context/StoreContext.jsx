import { createContext, useReducer } from 'react';

import {
  POPULAR_GAMES_URL,
  UPCOMING_GAMES_URL,
  NEW_GAMES_URL,
  gameDetailsURL,
  gameScreenshotURL,
} from '../api';

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  singleGame: null,
  screenshots: {},
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
    case 'GET_DETAIL':
      return {
        ...state,
        singleGame: action.payload.game,
        screenshots: action.payload.screenshots,
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

  const loadDetail = async (id) => {
    const detailDataResponse = await fetch(gameDetailsURL(id));
    const detailData = await detailDataResponse.json();

    const screenshotsResponse = await fetch(gameScreenshotURL(id));
    const screenshotsData = await screenshotsResponse.json();

    dispatch({
      type: 'GET_DETAIL',
      payload: {
        game: detailData,
        screenshots: screenshotsData,
      },
    });
  };

  return (
    <storeContext.Provider value={{ loadGames, loadDetail, ...state }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
