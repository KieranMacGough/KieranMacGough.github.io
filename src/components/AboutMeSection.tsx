import { Container, createStyles, Image, List, Text } from '@mantine/core';
import me from '../images/me.jpg';
import SectionHeading from './SectionHeading';

export default function AboutMeSection() {
    const { classes } = useStyles();
    return (
        <Container p="0">
            <SectionHeading sectionId="aboutme" text="About Me" />
            <Container className={classes.content}>
                <Container className={classes.text}>
                    <Text className={classes.paragraph}>
                        Hello! My name is Kieran and I love developing for the web. My focus is on frontend development, but would love to learn full stack. My first taste of coding was back in 2013 after developing a mod for Amnesia: The Dark Descent, <a href="https://www.moddb.com/mods/the-four-horsemen" rel="noreferrer" target="_blank" style={{textDecoration: 'underline orange'}}>The Four Horsemen</a>, using AngelScript. Since then, I have done small amounts of coding here and there, but only recently made the decision to change careers into a developer role. <br /><br />
                        Starting in 2022, I have been working on completing the free CS50X Web course, from Harvard, as well as working on some projects to gain experience using modern frameworks and the development process. <br /><br />
                        The main technologies I have been working with are:<br /><br />
                    </Text>
                    <List className={classes.list}>
                        <List.Item>JavaScript</List.Item>
                        <List.Item>React</List.Item>
                        <List.Item>Git/GitHub</List.Item>
                        <List.Item>TypeScript</List.Item>
                        <List.Item>React Native</List.Item>
                    </List>
                </Container>
                <Image className={classes.image} src={me} radius={'md'}/>
            </Container>
        </Container>
    )
}

const useStyles = createStyles((theme) => ({
    title: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    },

    slashes: {
        color: theme.primaryColor,
        paddingRight: '4px'
    },

    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column'
        }
    },

    image: {
        borderColor: 'orange',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: theme.radius.md,
        boxShadow: '0 0 20px 20px rgb(0 0 0 / 20%)',
        transform: 'rotate(10deg)'
    },

    text: {
        padding: 0,
    },

    paragraph: {
        marginRight: '30px',
        
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginRight: '0px'
        },
    },
    
    list: {
        listStyleType: 'square',
        columns: 2,
        listStylePosition: 'inside',
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            marginBottom: '20px'
        },

    }

}))