import { SEARCH_SONG, GET_CURRENT_SEARCH_SONGS } from "../actions";

const initialState = {
  currentSearch: "",
  currentSearchSongs: [],
};

const mainSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_SEARCH_SONGS:
      return {
        ...state,
        currentSearch: state.currentSearch,
        currentSearchSongs: [...action.payload],
      };

    case SEARCH_SONG:
      return {
        ...state,
        currentSearch: action.payload,
        currentSearchSongs: [...state.currentSearch],
      };
    default:
      return state;
  }
};

export default mainSearchReducer;
