import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSearchButtonAction } from "../redux/actions";

const LateralNavbar = () => {
  const searchButtonState = useSelector(
    (state) => state.currentSearch.selectedSearchButton
  );

  console.log("search button", searchButtonState);

  const dispatch = useDispatch();
  const selectSearchButton = () => {
    if (searchButtonState === false) {
      dispatch(selectSearchButtonAction(true));
    } else {
      dispatch(selectSearchButtonAction(false));
    }
    // }
  };

  return (
    <div className="bg-warning my-lateral-navbar text-secondary">
      <div className="lateral-navbar-container d-none d-sm-block">
        <div className="lateral-navbar-container">
          <div className="main sticky-top">
            <div className="custom-navbar">
              <div className="navbar-logo">
                <div className="container">
                  <Link to="/">
                    <img
                      src="/spotify-logo.png"
                      className="navbar-logo"
                      alt="spotify logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="navbar-top">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="primary-options navbar-nav d-flex flex-column">
                        <div className="home">
                          <Link to="/">
                            <div className="d-flex align-items-center">
                              <div className="icon-div ">
                                <Icon.HouseDoorFill className="home-icon" />
                              </div>
                              <span className="link-text">Home</span>
                            </div>
                          </Link>
                        </div>
                        <div className="search" onClick={selectSearchButton}>
                          <div className="d-flex align-items-center">
                            <div className="icon-div">
                              <Icon.Search className="search-icon" />
                              <i className="bi bi-search search-icon"></i>
                            </div>
                            <span className="link-text">Search</span>
                          </div>
                        </div>
                        <div className="your-library">
                          <a href="/" className="d-flex align-items-center">
                            <div className="icon-div">
                              <Icon.Collection className="library-icon" />
                            </div>
                            <span className="link-text">Your Library</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="secondary-options">
                        <div className="create-playlist">
                          <a href="/" className="d-flex align-items-center">
                            <div className="icon-div create-playlist-icon d-flex align-items-center justify-content-center">
                              <Icon.PlusSquare />
                            </div>
                            <span>Create Playlist</span>
                          </a>
                        </div>
                        <Link to="/liked-songs">
                          <div className="liked-songs d-flex align-items-center">
                            <div className="icon-div liked-songs-icon">
                              <Icon.HeartFill />
                            </div>
                            <span>Liked Songs</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="divider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralNavbar;
