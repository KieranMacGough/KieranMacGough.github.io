import {
  AppShell,
  useMantineTheme,
  Container,
  Divider,
} from '@mantine/core';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import IntroSection from './components/IntroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';


export default function App() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          maxWidth: '100%',
          overflowX: 'hidden',
          padding: 0
        },
      }}
      footer={
        <FooterSection />
      }
      header={
        <HeaderSection links={[
          { link: 'aboutme', label: 'About Me' },
          { link: 'projects', label: 'Projects' },
          { link: 'contact', label: 'Contact' }]} />
      }
    >
      <Container>
        <IntroSection />
        <AboutMeSection />
          <Divider my="50px" />
        <ProjectsSection />
          <Divider my="50px" />
        <ContactSection />
          <Divider my="50px" />
      </Container>

    </AppShell>
  );
}