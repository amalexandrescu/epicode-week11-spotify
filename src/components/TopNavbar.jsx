import * as Icon from "react-bootstrap-icons";

const TopNavbar = () => {
  return (
    // <div className="bg-info top-navbar">top navbar</div>
    <div id="navbar-container" className="sticky-top top-navbar">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link left-arrow-link px-0 mr-3" href="#home">
                <Icon.ChevronLeft className="arrowLeftAndRight arrow-left" />

                {/* <i className="bi bi-chevron-left arrowLeftAndRight arrow-left"></i> */}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a href="#home" className="nav-link px-0 disabled">
                <Icon.ChevronRight className="arrowLeftAndRight arrow-right" />
                {/* <i className="bi bi-chevron-right arrowLeftAndRight arrow-right"></i> */}
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown d-none d-sm-block">
          <a
            id="account-container"
            className="py-3 btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
            href="#home"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center overflow-hidden align-to-the-left">
              <span id="profile-image">
                <Icon.Person className="person-icon-account" />
                {/* <i className="bi bi-person person-icon-account"></i> */}
              </span>
              <span className="pl-1 wirte-just-on-one-line">
                namedsddsajdsjkdnsak
              </span>
            </div>
          </a>

          <div className="dropdown-menu">
            <a className="dropdown-item" href="#home">
              Account
            </a>
            <a className="dropdown-item" href="#home">
              Profile
            </a>
            <a className="dropdown-item" href="#home">
              Settings
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#home">
              Log out
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
