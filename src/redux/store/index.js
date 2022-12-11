import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recentlyPlayedReducer from "../reducers/recentlyPlayedReducer";
import mainSearchReducer from "../reducers/mainSearchReducer";
import likedSongsReducer from "../reducers/likedSongsReducer";
import goodMorningReducer from "../reducers/goodMorningReducer";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  recentlyPlayedSection: recentlyPlayedReducer,
  currentSearch: mainSearchReducer,
  likedSongs: likedSongsReducer,
  goodMorningSection: goodMorningReducer,
  // currentSearchFetchedSongs: mainSearchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
