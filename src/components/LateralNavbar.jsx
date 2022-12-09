// import spotifyLogo from ""
import * as Icon from "react-bootstrap-icons";

const LateralNavbar = () => {
  return (
    <div className="bg-warning my-lateral-navbar text-secondary">
      {/* this is my lateral navbar */}
      <div className="lateral-navbar-container d-none d-sm-block">
        <div className="lateral-navbar-container">
          <div className="main sticky-top">
            <div className="custom-navbar">
              <div className="navbar-logo">
                <div className="container">
                  <a href="./homePage.html">
                    <img
                      src="../spotify-logo.png"
                      className="navbar-logo"
                      alt="spotify logo"
                    />
                  </a>
                </div>
              </div>
              <div className="navbar-top">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="primary-options navbar-nav d-flex flex-column">
                        <div className="home">
                          <a
                            href="./homePage.html"
                            className="d-flex align-items-center"
                          >
                            <div className="icon-div">
                              <Icon.HouseDoorFill className="home-icon" />
                              {/* <i className="bi bi-house-door-fill home-icon"></i> */}
                            </div>
                            <span className="link-text">Home</span>
                          </a>
                        </div>
                        <div className="search">
                          <a href="#" className="d-flex align-items-center">
                            <div className="icon-div">
                              <Icon.Search className="search-icon" />
                              <i className="bi bi-search search-icon"></i>
                            </div>
                            <span className="link-text">Search</span>
                          </a>
                        </div>
                        <div className="your-library">
                          <a href="#" className="d-flex align-items-center">
                            <div className="icon-div">
                              <Icon.Collection className="library-icon" />
                              {/* <i className="bi bi-collection library-icon"></i> */}
                            </div>
                            <span className="link-text">Your Library</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="secondary-options">
                        <div className="create-playlist">
                          <a href="#" className="d-flex align-items-center">
                            <div className="icon-div create-playlist-icon d-flex align-items-center justify-content-center">
                              <Icon.PlusSquare />
                              {/* <i className="bi bi-plus-lg"></i> */}
                            </div>
                            <span>Create Playlist</span>
                          </a>
                        </div>
                        <div className="liked-songs">
                          <a href="#" className="d-flex align-items-center">
                            <div className="icon-div liked-songs-icon">
                              <Icon.HeartFill />
                              {/* <i className="bi bi-heart-fill"></i> */}
                            </div>
                            <span>Liked Songs</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="divider" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-bottom">
                <div className="container">
                  <ul className="navbar-playlist list-group">
                    <li className="navbar-playlist-item">Funky Heavy Bluesy</li>
                    <li className="navbar-playlist-item">
                      Your Top Songs 2020
                    </li>
                    <li className="navbar-playlist-item">
                      In Love With You - Erykah lorem ipsum
                    </li>
                    <li className="navbar-playlist-item">
                      This Is Rod Stewart
                    </li>
                    <li className="navbar-playlist-item">
                      FRANCHISE ft. Young
                    </li>
                    <li className="navbar-playlist-item">
                      Your Top Songs 2019
                    </li>
                    <li className="navbar-playlist-item">Palleggio</li>
                    <li className="navbar-playlist-item">
                      This Is Joe Bonamassa
                    </li>
                    <li className="navbar-playlist-item">Jun19</li>
                    <li className="navbar-playlist-item collaborative-playlist-item">
                      Jack 30th Party 2 Lorem, ipsum
                      <span className="collaborative-icon">
                        <Icon.People />
                        {/* <i className="bi bi-people"></i> */}
                      </span>
                    </li>
                    <li className="navbar-playlist-item collaborative-playlist-item">
                      Jack 30th Party
                      <span className="collaborative-icon">
                        <Icon.People />
                        {/* <i className="bi bi-people"></i> */}
                      </span>
                    </li>
                    <li className="navbar-playlist-item">This Is Opeth</li>
                    <li className="navbar-playlist-item">
                      This Is Rod Stewart
                    </li>
                    <li className="navbar-playlist-item">
                      FRANCHISE ft. Young Thugsjkfh
                    </li>
                    <li className="navbar-playlist-item">
                      Your Top Songs 2021
                    </li>
                    <li className="navbar-playlist-item">Oct16</li>
                    <li className="navbar-playlist-item">
                      Your Top Songs 2018
                    </li>
                  </ul>
                </div>
              </div>
              <div className="install-app">
                <div className="container">
                  <a href="#" className="d-flex align-items-center">
                    <div className="icon-div">
                      <Icon.ArrowDownCircle className="install-icon" />
                      {/* <i className="bi bi-arrow-down-circle install-icon"></i> */}
                    </div>
                    <span>Install App</span>
                  </a>
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
