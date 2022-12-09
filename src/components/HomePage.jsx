import React from "react";
import MainSearch from "./MainSearch";
import RecentlyPlayedSection from "./RecentlyPlayedSection";
import { Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container fluid>
      <MainSearch />
      <RecentlyPlayedSection />
    </Container>
  );
}
