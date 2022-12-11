import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import { removeFromLikedSongsAction } from "../redux/actions";

const LikedSongsPage = () => {
  const likedSongsState = useSelector((state) => state.likedSongs.likedSongs);

  console.log("liked songs", likedSongsState);

  const dispatch = useDispatch();

  return (
    <Container className="text-light">
      {likedSongsState.length === 0 && (
        <div className="text-center mt-3">No liked songs yet</div>
      )}

      <ol>
        {likedSongsState.length > 0 &&
          likedSongsState.map((likedSong, index) => {
            return (
              <li className="py-2" key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {likedSong.song} - {likedSong.artist}
                  </div>
                  <div
                    className="removeFromLikedSongsContainer"
                    onClick={() => {
                      console.log("index of the want to remove song", index);
                      dispatch(removeFromLikedSongsAction(likedSong.id));
                    }}
                  >
                    <Icon.Trash />
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
    </Container>
  );
};

export default LikedSongsPage;
