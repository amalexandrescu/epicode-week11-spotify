import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recentlyPlayedReducer from "../reducers/recentlyPlayedReducer";
import mainSearchReducer from "../reducers/mainSearchReducer";
import likedSongsReducer from "../reducers/likedSongsReducer";
import goodMorningReducer from "../reducers/goodMorningReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { encryptTransform } from "redux-persist-transform-encrypt";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  recentlyPlayedSection: recentlyPlayedReducer,
  currentSearch: mainSearchReducer,
  likedSongs: likedSongsReducer,
  goodMorningSection: goodMorningReducer,
  // currentSearchFetchedSongs: mainSearchReducer,
});

const persistConfig = {
  key: "root", // ???
  storage: localStorage, // the default engine
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer, // here there's place for just 1 value!
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // this is for shutting down the serializable check
      // performed by Redux, and getting rid of the error in the console
    }),
});

export const persistor = persistStore(store);

// export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
