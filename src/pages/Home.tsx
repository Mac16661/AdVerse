import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Section from "../components/Section";
import SndSection from "../components/SndSection";
import TrdSection from "../components/TrdSection";

const Container = styled.div`
  ${"" /* height:100vh; */}
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Section tittle="Ad Verse" background="hero.jpg" />
      <SndSection background="black.jpg" />
      <TrdSection background="black.jpg" />
    </Container>
  );
};

export default Home;
