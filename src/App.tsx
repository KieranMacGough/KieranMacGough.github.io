import { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
  Container,
} from '@mantine/core';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import IntroSection from './components/IntroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';


export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      footer={
        <FooterSection />
      }
      header={
          <HeaderSection links={[
            {link:'aboutme', label:'About Me'},
            {link:'projects', label:'Projects'},
            {link:'experience', label:'Experience'},
            {link:'contact', label:'Contact'}]} />
      }
    >
      <Container>
        <IntroSection />
        <AboutMeSection />
        <ProjectsSection />
      </Container>
      <p style={{height: '3000px'}}></p>
    </AppShell>
  );
}