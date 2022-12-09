export const GET_SONGS = "GET_SONGS";
export const SEARCH_SONG = "SEARCH_SONG";
export const GET_CURRENT_SEARCH_SONGS = "GET_CURRENT_SEARCH_SONGS";
export const SELECT_SONG_CARD = "SELECT_SONG_CARD";

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
