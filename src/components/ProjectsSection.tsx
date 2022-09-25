import { Carousel } from '@mantine/carousel';
import { Container, createStyles, MediaQuery, useMantineTheme, Paper, Text, Title, Button, } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import me from '../images/me.jpg';
import { ProjectCard } from './ProjectCard';
import { ProjectsCarosel } from './ProjectsCarosel';

export default function AboutMeSection() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const cards = data.map((item) => (
        <ProjectCard image={item.image} title={item.title} description={item.description} country={item.country} github={item.github} badges={item.badges} />
    ));

    return (
        <Container>
            <h1 id='projects' className={classes.title}><span className={classes.slashes}>//</span>Projects</h1>

            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Container className={classes.container}>
                    {cards}
                </Container>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Container className={classes.container}>
                    <Carousel
                        slideSize="50%"
                        breakpoints={[{ maxWidth: 'sm', slideSize: '0%', slideGap: 2 }]}
                        slideGap="xl"
                        align="start"
                        slidesToScroll={1}
                    >
                        {cards}
                    </Carousel>
                </Container>
            </MediaQuery>
        </Container>
    )
}


const data = [{
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "☀️",
            "label": "Sunny weather"
        },
        {
            "emoji": "🦓",
            "label": "Onsite zoo"
        },
        {
            "emoji": "🌊",
            "label": "Sea"
        },
        {
            "emoji": "🌲",
            "label": "Nature"
        },
        {
            "emoji": "🤽",
            "label": "Water sports"
        }
    ]
},
{
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "☀️",
            "label": "Sunny weather"
        },
        {
            "emoji": "🦓",
            "label": "Onsite zoo"
        },
        {
            "emoji": "🌊",
            "label": "Sea"
        },
        {
            "emoji": "🌲",
            "label": "Nature"
        },
        {
            "emoji": "🤽",
            "label": "Water sports"
        }
    ]
}, {
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "☀️",
            "label": "Sunny weather"
        },
        {
            "emoji": "🦓",
            "label": "Onsite zoo"
        },
        {
            "emoji": "🌊",
            "label": "Sea"
        },
        {
            "emoji": "🌲",
            "label": "Nature"
        },
        {
            "emoji": "🤽",
            "label": "Water sports"
        }
    ]
}, {
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "☀️",
            "label": "Sunny weather"
        },
        {
            "emoji": "🦓",
            "label": "Onsite zoo"
        },
        {
            "emoji": "🌊",
            "label": "Sea"
        },
        {
            "emoji": "🌲",
            "label": "Nature"
        },
        {
            "emoji": "🤽",
            "label": "Water sports"
        }
    ]
},
]

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    },

    slashes: {
        color: theme.primaryColor,
        paddingRight: '4px'
    },


}))