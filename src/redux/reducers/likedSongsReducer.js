// import { useSelector } from "react-redux";
import { ADD_TO_LIKED_SONGS, REMOVE_FROM_LIKED_SONGS } from "../actions";

const initialState = {
  likedSongs: [],
};

const mainSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED_SONGS:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };

    case REMOVE_FROM_LIKED_SONGS:
      return {
        ...state,
        likedSongs: state.likedSongs.filter((song, index) => {
          if (index !== action.payload) {
            return song;
          }
        }),
      };
    default:
      return state;
  }
};

export default mainSearchReducer;
