import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getGoodMorningSectionSongs,
  finishedLoadingAction,
  selectSongCardAction,
} from "../redux/actions";

const GoodMorningSection = () => {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  // const [finishedLoading, setFinishedLoading] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.goodMorningSection.isLoading);

  useEffect(() => {
    dispatch(getGoodMorningSectionSongs());
  }, []);

  const goodMorningSongsFetched = useSelector(
    (state) => state.goodMorningSection.goodMorningSongs
  );
  console.log("gmsection songs fetched", goodMorningSongsFetched);

  // const test = false;

  useEffect(() => {
    setFetchedSongs(...goodMorningSongsFetched);
    // console.log("fetchedSOngs", fetchedSongs);
    // if (fetchedSongs.length === 6) {
    // dispatch(finishedLoadingAction(false));
    // }
  }, []);

  return (
    <Container fluid className="">
      <h3 className="mb-3 text-light">Good morning</h3>
      <div className="text-center">
        {isLoading === true ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          <div></div>
        )}
      </div>
      <div className="good-morning-section-row row d-flex justify-content-center gm-song-container">
        {goodMorningSongsFetched.length === 6 &&
          goodMorningSongsFetched.slice(0, 6).map((song) => {
            return (
              <div
                key={song.album.id}
                className="col-6 col-sm-12 scol-md-6 col-lg-4"
              >
                <div
                  onClick={() => {
                    dispatch(
                      selectSongCardAction({
                        id: song.id,
                        image: song.artist.picture_small,
                        artist: song.artist.name,
                        song: song.title_short,
                      })
                    );
                  }}
                  className="album-card-horizontal d-flex align-items-center  bg-dark"
                >
                  <div>
                    <img
                      className="album-img album-card-horizontal-img"
                      src={song.artist.picture_small}
                      alt="album"
                    />
                  </div>
                  <div className="album-name album-card-horizontal-name">
                    {song.album.title}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default GoodMorningSection;
