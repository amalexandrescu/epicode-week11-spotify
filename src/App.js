import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LateralNavbar from "./components/LateralNavbar";
import { Container, Row } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import FooterMusicPlayer from "./components/FooterMusicPlayer";
import RecentlyPlayedSection from "./components/RecentlyPlayedSection";

function App() {
  return (
    <Container fluid className="main-container px-0">
      <div className="d-flex">
        <LateralNavbar className="" />
        <div className=" bg-primary right-container px-0">
          <TopNavbar />
          <RecentlyPlayedSection />
        </div>
      </div>
      <FooterMusicPlayer className="" />
    </Container>
  );
}

export default App;
