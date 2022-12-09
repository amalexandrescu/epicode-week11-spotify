import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

const ArtistPage = () => {
  const currentSearch = useSelector(
    (state) => state.currentSearch.currentSearch
  );

  const currentSearchSongsFetched = useSelector(
    (state) => state.currentSearch.currentSearchSongs
  );
  // console.log(currentSearchSongsFetched[0].rank);

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
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ArtistPage;
