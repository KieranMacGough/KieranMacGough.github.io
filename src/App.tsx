import React from 'react';
import GlobalStyle from './styles/global';
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import SectionIntro from './components/SectionIntro';
import './App.css';
import styled from 'styled-components';
import SectionAboutMe from './components/SectionAboutMe';
import SectionExperience from './components/SectionExperience';
import SectionProjects from './components/SectionProjects';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Content>
        <SectionIntro />
        <SectionAboutMe />
        <SectionProjects />
        <SectionExperience />
      </Content>
      <div style={{height: 1000}}></div>
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
`