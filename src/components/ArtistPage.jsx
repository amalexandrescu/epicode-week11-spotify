import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListGroup, Row } from "react-bootstrap";
import { addToLikedSongsAction, selectSongCardAction } from "../redux/actions";
import { useState } from "react";

const ArtistPage = () => {
  const [currentLikedSong, setCurrentLikedSong] = useState("");
  const [clikedHeart, setClikedHeart] = useState(undefined);
  const currentSearch = useSelector(
    (state) => state.currentSearch.currentSearch
  );

  const currentSearchSongsFetched = useSelector(
    (state) => state.currentSearch.currentSearchSongs
  );

  const dispatch = useDispatch();

  const addToLikedSongs = (song) => {
    dispatch(addToLikedSongsAction(song));
  };

  console.log("current search", currentSearch);
  return (
    <div>
      <div
        id="jumbotron-container"
        className="jumbotron-bg jumbotron jumbotron-fluid py-0 d-flex align-items-end"
      >
        {currentSearchSongsFetched && currentSearchSongsFetched.length > 0 && (
          <div className="container-fluid text-light d-flex flex-column">
            <p>
              <Icon.PatchCheckFill className="text-primary" />
            </p>
            <h1 id="artist-name" className="display-4">
              {currentSearch.slice(0, 1).toUpperCase() +
                currentSearch.slice(1, currentSearch.length)}
            </h1>
            <p id="monthly-listeners" className="lead">
              {currentSearchSongsFetched[0].rank} monthly listeners
            </p>
          </div>
        )}
      </div>
      <div className="music-container">
        <Container fluid>
          <div className="row">
            <div className="container-fluid d-flex justify-content-between w-100">
              <div className="d-flex my-3">
                <div className="d-none d-sm-block">
                  <Icon.PauseCircleFill className="pause-button mr-4" />
                </div>
                <div className="text-light follow-button my-auto mr-4">
                  FOLLOW
                </div>
                <Icon.ThreeDots className="text-light my-auto" />
              </div>
              <div className="d-block d-sm-none d-flex">
                <Icon.Shuffle className="my-auto mr-4 shuffleXsScreens" />
                <Icon.PlayCircleFill className="playButtonXsScreens d-block d-sm-none" />
              </div>
            </div>
          </div>
          <div className="text-light">
            <div className="d-flex upper_part">
              <span>#</span>
              <span className="ml-3">Title</span>
              <Icon.Clock className="ml-auto" />
            </div>
          </div>
          <hr className="bg-light" />
          <ol className="text-light">
            {currentSearchSongsFetched &&
              currentSearchSongsFetched.map((song) => {
                return (
                  <li key={song.id} className="dark-background">
                    <div className="d-flex justify-content-between align-items-center">
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
                      >
                        <div className="song-container">{song.title_short}</div>
                        <div>{song.artist.name}</div>
                      </div>
                      <div className="d-flex">
                        <div
                          className="mr-3 heart-container"
                          onClick={() => {
                            setCurrentLikedSong(song.title_short);
                            addToLikedSongs({
                              song: song.title_short,
                              artist: song.artist.name,
                            });
                          }}
                        >
                          <Icon.HeartFill />
                        </div>
                        <div>
                          {song.duration % 60 < 10
                            ? `${Math.floor(song.duration / 60)} : 0${
                                song.duration % 60
                              }`
                            : `${Math.floor(song.duration / 60)} : ${
                                song.duration % 60
                              }`}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ol>
        </Container>
      </div>
    </div>
  );
};

export default ArtistPage;
