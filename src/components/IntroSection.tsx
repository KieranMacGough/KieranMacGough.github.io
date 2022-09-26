import { Container, createStyles, Text} from '@mantine/core';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { fadefrombottom } from '../styles/animations';

interface ContainerProps {
    height: number
}

export default function IntroSection() {
    const { height } = useWindowDimensions();
    const { classes } = useStyles({height});
    return (
        <>
        <Container className={classes.root}>
            <Text className={classes.hello}>Hi, my name is</Text>
            <Text className={classes.name}>Kieran MacGough</Text>
            <Text className={classes.headline}>I like to code.</Text>
            <Container className={classes.wrapper}>
                <Text className={classes.slashes}>//</Text>
                <Text className={classes.blurb}>I am a front-end developer, specialising in React. Welcome to my website.</Text>
            </Container>
            {/* <Container className={classes.scrolldown}>
                <Text>Scroll Down</Text>
            </Container> */}
        </Container>
        </>
    )
}

const useStyles = createStyles((theme, {height}: ContainerProps) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 0,
        height: height-120,
        padding: 0,
        paddingTop: 200,
        '*': {
            position: 'relative',
            opacity: 0,
            animation: `${fadefrombottom} 1s ease-out forwards`,
        }
    },
    hello: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontWeight: 200,
        fontSize: '50px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '20px',
        },
        animationDelay: '0.2s'
    },
    name: {
        color: theme.colorScheme === 'dark' ? theme.colors.orange[5] : theme.colors.orange[6],
        fontWeight: 700,
        fontSize: '80px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '30px',
        },
        animationDelay: '0.6s'
    },
    headline: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontWeight: 300,
        fontSize: '100px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '35px',
        },
        animationDelay: '1s'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        animationDelay: '1.4s',
        margin: 0,
        padding: 0
    },
    slashes: {
        color: theme.primaryColor,
        fontWeight: 400,
        fontSize: '36px',
        paddingRight: '8px'
    },
    blurb: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontWeight: 400,
        fontSize: '18px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '12px',
        },
    },
    scrolldown: {
        position: 'absolute!important' as any,
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        animation: 'none',
        '*': {
            animationDelay: '2s'
        }
    }
}))
