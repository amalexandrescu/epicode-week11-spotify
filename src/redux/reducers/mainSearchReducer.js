import {
  SEARCH_SONG,
  GET_CURRENT_SEARCH_SONGS,
  SELECT_SEARCH_BUTTON,
} from "../actions";

const initialState = {
  currentSearch: "",
  currentSearchSongs: [],
  selectedSearchButton: false,
};

const mainSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEARCH_BUTTON:
      return {
        ...state,
        currentSearch: state.currentSearch,
        currentSearchSongs: [...state.currentSearchSongs],
        selectedSearchButton: action.payload,
      };

    case GET_CURRENT_SEARCH_SONGS:
      return {
        ...state,
        currentSearch: state.currentSearch,
        currentSearchSongs: [...action.payload],
        selectedSearchButton: state.selectedSearchButton,
      };

    case SEARCH_SONG:
      return {
        ...state,
        currentSearch: action.payload,
        currentSearchSongs: [...state.currentSearchSongs],
        selectedSearchButton: state.selectedSearchButton,
      };
    default:
      return state;
  }
};

export default mainSearchReducer;
