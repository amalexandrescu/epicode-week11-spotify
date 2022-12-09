import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LateralNavbar from "./components/LateralNavbar";
import { Container, Row } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import FooterMusicPlayer from "./components/FooterMusicPlayer";
import RecentlyPlayedSection from "./components/RecentlyPlayedSection";
import MainSearch from "./components/MainSearch";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main-container px-0">
        <div className="d-flex">
          <LateralNavbar className="" />
          <div className=" bg-primary right-container px-0">
            <TopNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/" element={<MainSearch />} /> */}
              {/* <Route path="/" element={<RecentlyPlayedSection />} /> */}
              <Route path="/:artist" element={<ArtistPage />} />
            </Routes>
          </div>
        </div>
        <FooterMusicPlayer className="" />
      </Container>
    </BrowserRouter>
  );
}

export default App;
