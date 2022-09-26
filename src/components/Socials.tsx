import LinkedInSVG from '../images/linkedin.svg';
import GitHubSVG from '../images/github.svg';
import YouTubeSVG from '../images/youtube.svg';
import { Container, createStyles, Image } from '@mantine/core';

function Socials() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <a target="_blank" rel="noreferrer" href="https://github.com/KieranMacGough"><Image width={40} height={40} className={classes.icon} src={GitHubSVG} /></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kieran-macgough/"><Image width={40} height={40} className={classes.icon} src={LinkedInSVG} /></a>
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCek9LJ9JOJGMGIgimgIoH_w"><Image width={40} height={40} className={classes.icon} src={YouTubeSVG} /></a>
    </Container>
  );
}

export default Socials;

const useStyles = createStyles((theme) => ({
  container: {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    marginBottom: '50px',
    marginLeft: '50px',
    display: 'flex',
    flexDirection: 'column',

    [`@media (max-width: 1300px)`]: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    }
  },

  icon: {
    marginBottom: '20px',
    transform: 'scale(1)',
    transition: '0.15s all ease',
    filter: 'invert(100%) sepia(1%) saturate(34%) hue-rotate(215deg) brightness(103%) contrast(60%)',
    [`@media (max-width: 1300px)`]: {
      marginRight: '16px',
      marginLeft: '16px'
    },
    [`@media (min-width: 1300px)`]: {
      '&:hover': {
        filter: 'none',
        transform: 'scale(1.3)',
        boxShadow: '0 0 20px 20px rgb(0 0 0 / 20%)',
        cursor: 'pointer',
      }
    }
  }
}))
