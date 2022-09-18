import React from 'react';
import GlobalStyle from './styles/global';
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import SectionIntro from './components/Intro';
import styled from 'styled-components';
import SectionAboutMe from './components/AboutMe';
import Experience from './components/Experience';
import SectionProjects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Content>
        <SectionIntro />
        <SectionAboutMe />
        <SectionProjects />
        <Experience />
        <Contact />
      </Content>
      <Socials />
      <Footer />
    </>
  );
}

export default App;

const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 300px;
  z-index: -1;

  @media screen and (max-width: 1415px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }
`