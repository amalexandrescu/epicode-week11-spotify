import { GET_SONGS, SELECT_SONG_CARD } from "../actions";

const initialState = {
  recentlyPlayedSongs: [],
  selectedSongCard: "",
};

const recentlyPlayedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG_CARD:
      return {
        ...state,
        recentlyPlayedSongs: [...state.recentlyPlayedSongs],
        selectedSongCard: action.payload,
      };

    case GET_SONGS:
      return {
        ...state,
        recentlyPlayedSongs: [...state.recentlyPlayedSongs, ...action.payload],
        selectedSongCard: [...state.selectedSongCard],
      };

    default:
      return state;
  }
};

export default recentlyPlayedReducer;
