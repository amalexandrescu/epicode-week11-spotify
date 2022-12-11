export const GET_SONGS = "GET_SONGS";
export const SEARCH_SONG = "SEARCH_SONG";
export const GET_CURRENT_SEARCH_SONGS = "GET_CURRENT_SEARCH_SONGS";
export const SELECT_SONG_CARD = "SELECT_SONG_CARD";
export const SELECT_SEARCH_BUTTON = "SELECT_SEARCH_BUTTON";
export const ADD_TO_LIKED_SONGS = "ADD_TO_LIKED_SONGS";
export const REMOVE_FROM_LIKED_SONGS = "REMOVE_FROM_LIKED_SONGS";
export const FETCH_SONGS_GM_SECTION = "FETCH_SONGS_GM_SECTION";
export const FINISH_LOADING = "FINISH_LOADING";

export const removeFromLikedSongsAction = (index) => {
  return {
    type: REMOVE_FROM_LIKED_SONGS,
    payload: index,
  };
};

export const addToLikedSongsAction = (song) => {
  return {
    type: ADD_TO_LIKED_SONGS,
    payload: song,
  };
};

export const selectSearchButtonAction = (value) => {
  return {
    type: SELECT_SEARCH_BUTTON,
    payload: value,
  };
};

export const selectSongCardAction = (cardId) => {
  return {
    type: SELECT_SONG_CARD,
    payload: cardId,
  };
};

export const searchSongAction = (query) => {
  return {
    type: SEARCH_SONG,
    payload: query,
  };
};

const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;

export const getCurrentSearchSongsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("current search fetch from API...");
    try {
      let resp = await fetch(url + query);
      if (resp.ok) {
        let { data } = await resp.json();
        console.log("current search songs:", data);
        dispatch({
          type: GET_CURRENT_SEARCH_SONGS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSongsAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the songs from the API...");
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`
      );
      if (resp.ok) {
        //for destructuring: {data} = await resp.json();
        let fetchedSongs = await resp.json();
        console.log(fetchedSongs.data.slice(0, 6));
        dispatch({
          type: GET_SONGS,
          payload: fetchedSongs.data.slice(0, 6), // the reducer is just being given
          // the final result, the array of songs! so it cannot fail :)
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const artistArray = [
  "queen",
  "camila cabello",
  "rihanna",
  "ed sheeran",
  "beyonce",
  "shawn mendes",
];

export const getGoodMorningSectionSongs = () => {
  return async (dispatch, getState) => {
    console.log("good morning section fetching songs...");
    try {
      for (let i = 0; i < artistArray.length; i++) {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistArray[i]}`
        );
        if (response.ok) {
          let fetchedSongs = await response.json();
          dispatch({
            type: FETCH_SONGS_GM_SECTION,
            payload: fetchedSongs.data.slice(0, 1),
          });
        } else {
          console.log("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const finishedLoadingAction = (value) => {
  return {
    type: FINISH_LOADING,
    payload: value,
  };
};
