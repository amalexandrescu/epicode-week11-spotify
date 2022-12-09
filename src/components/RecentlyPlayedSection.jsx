import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction, selectSongCardAction } from "../redux/actions";
import CardSong from "./CardSong";
import { Container, Row } from "react-bootstrap";

const RecentlyPlayedSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction());
  }, []);

  const recentlyPlayedSongsFetched = useSelector(
    (state) => state.recentlyPlayedSection.recentlyPlayedSongs
  );

  console.log("state", recentlyPlayedSongsFetched);
  return (
    <Container fluid>
      <h3 className="mb-3">Recently Played</h3>
      <Row className="recently-played-section-row">
        {recentlyPlayedSongsFetched &&
          recentlyPlayedSongsFetched.map((song) => {
            return (
              <CardSong
                key={song.id}
                song={song}
                onClick={() => {
                  dispatch(selectSongCardAction(song.id));
                }}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default RecentlyPlayedSection;
