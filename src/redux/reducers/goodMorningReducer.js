import { FETCH_SONGS_GM_SECTION, FINISH_LOADING } from "../actions";

const initialState = {
  goodMorningSongs: [],
  isLoading: true,
};

const goodMorningReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_LOADING:
      return {
        ...state,
        goodMorningSongs: [...state.goodMorningSongs],
        // selectedSongCard: [...state.selectedSongCard],
        isLoading: false,
      };

    case FETCH_SONGS_GM_SECTION:
      return {
        ...state,
        goodMorningSongs: [...state.goodMorningSongs, ...action.payload],
        // selectedSongCard: [...state.selectedSongCard],
        isLoading: state.isLoading,
      };

    default:
      return state;
  }
};

export default goodMorningReducer;
