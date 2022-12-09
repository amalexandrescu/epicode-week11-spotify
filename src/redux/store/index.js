import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recentlyPlayedReducer from "../reducers/recentlyPlayedReducer";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  recentlyPlayedSongs: recentlyPlayedReducer,
  // jobs: jobsReducer,
  // favorites: favoritesReducer,
  // searchedResults: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
