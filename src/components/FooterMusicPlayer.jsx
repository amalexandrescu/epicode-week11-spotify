import * as Icon from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const FooterMusicPlayer = () => {
  const selectedSong = useSelector(
    (state) => state.recentlyPlayedSection.selectedSongCard
  );

  console.log("selected song footer", selectedSong);

  return (
    <div className="footer-bg music-player-container d-flex align-items-center">
      <Container fluid>
        <div className="d-flex justify-content-between text-light">
          {selectedSong.length === 0 ? (
            <>
              <div className="d-flex">
                <div id="image-music-player">
                  {/* <img src="" alt="" className="footer-image" /> */}
                </div>
                <div className="mx-3 my-auto ">
                  <div>Song title</div>
                  <div>Artist title</div>
                </div>
                <div className="my-auto">
                  <Icon.HeartFill className="text-seondary" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div id="music-player-container" className="d-flex">
                <div id="image-music-player">
                  <img
                    src={selectedSong.image}
                    alt="artist"
                    className="footer-image"
                  />
                </div>
                <div className="mx-3 my-auto ">
                  <div>{selectedSong.song}</div>
                  <div>{selectedSong.artist}</div>
                </div>
                <div className="my-auto">
                  <Icon.HeartFill className="text-secondary" />
                </div>
              </div>
            </>
          )}
          <div className="my-auto">
            <div className="d-flex justify-content-center mb-1">
              <Icon.Shuffle className="mx-2" />
              <Icon.SkipStartFill className="mx-2" />
              <Icon.PlayCircleFill className="mx-2" />
              <Icon.SkipEndFill className="mx-2" />
              <Icon.Repeat className="mx-2" />
            </div>
            <div className="d-flex mt-1">
              <div className="mr-2">00:00</div>
              <div>
                <input type="range" />
              </div>
              <div className="ml-2">00:00</div>
            </div>
          </div>
          <div className="text-light my-auto">
            <Icon.PersonBadge />
            <Icon.VolumeDown className="mx-2" />
            <input type="range" className="volume-input" />
            <Icon.ArrowsAngleExpand className="ml-2" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterMusicPlayer;
