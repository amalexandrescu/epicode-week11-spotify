import { Card } from "react-bootstrap";
const CardSong = ({ song }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 h-100">
      <Card>
        <Card.Img
          variant="top"
          // src={song.artist.picture_medium}
          src={song.album.cover_medium}
          className="p-3"
        />
        <Card.Body>
          <Card.Title>{song.title_short}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSong;
