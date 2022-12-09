import * as Icon from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const FooterMusicPlayer = () => {
  return (
    <div className="bg-warning music-player-container d-flex align-items-center">
      <Container fluid>
        <div className="d-flex">
          <div id="image-music-player">
            <img src="" alt="" className="footer-image" />
          </div>
          <div className="mx-3 my-auto ">
            <div>Song title</div>
            <div>Artist title</div>
          </div>
          <div className="my-auto">
            <Icon.HeartFill className="text-danger" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterMusicPlayer;
