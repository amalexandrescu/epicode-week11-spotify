export const GET_SONGS = "GET_SONGS";

export const getSongsAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the songs from the API...");
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        console.log(fetchedSongs);
        dispatch({
          type: GET_SONGS,
          payload: fetchedSongs, // the reducer is just being given
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
