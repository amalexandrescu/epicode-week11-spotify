import React from "react";
import MainSearch from "./MainSearch";
import RecentlyPlayedSection from "./RecentlyPlayedSection";
import { Container } from "react-bootstrap";
import GoodMorningSection from "./GoodMorningSection";

export default function HomePage() {
  return (
    <Container fluid>
      <MainSearch />
      <GoodMorningSection />
      <RecentlyPlayedSection />
    </Container>
  );
}
