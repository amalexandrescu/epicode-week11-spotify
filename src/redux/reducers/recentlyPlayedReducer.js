import { GET_SONGS } from "../actions";

const initialState = {
  // we're already in the "book" slice of the Redux store
  recentlyPlayed: [],
};

const recentlyPlayedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        recentlyPlayed: action.payload,
      };

    default:
      return state;
  }
};

export default recentlyPlayedReducer;
