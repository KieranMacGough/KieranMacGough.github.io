import { Carousel } from '@mantine/carousel';
import { Container, createStyles, MediaQuery } from '@mantine/core';
import { ProjectCard } from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function AboutMeSection() {
    const { classes } = useStyles();
    const cards = data.map((item) => (
        <ProjectCard image={item.image} title={item.title} description={item.description} maintech={item.maintech} github={item.github} badges={item.badges} moreinfo={item.moreinfo}/>
    ));

    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <ProjectCard image={item.image} title={item.title} description={item.description} maintech={item.maintech} github={item.github} badges={item.badges} moreinfo={item.moreinfo} />
        </Carousel.Slide>
    ))
    return (
        <Container p="0">
            <SectionHeading sectionId="projects" text="Projects" />
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Container className={classes.container} >
                    {cards}
                </Container>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Container p="0" className={classes.carouselcontainer}>
                    <Carousel
                        slideSize="95%"
                        slideGap={6}
                        align="center"
                        slidesToScroll={1}
                        withControls={false}
                        style={{overflow: 'visible', maxWidth: '100%'}}
                    >
                        {slides}
                    </Carousel>
                </Container>
            </MediaQuery>
        </Container>
    )
}


const data = [
{
    "image": "PokedexApp.png",
    "title": "Pokedex App",
    "maintech": "Mobile App",
    "description": "A Pokedex app for Android, using PokeAPI and a public Figma design. Search and fitler through all 905 Pokemon. See more details, such as locations and type weaknesses.",
    "moreinfo": "https://www.youtube.com/watch?v=0UgxlwFYOOc",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "⚛️",
            "label": "React Native"
        },
        {
            "emoji": "📜",
            "label": "JavaScript"
        },
        {
            "emoji": "🐱",
            "label": "GitHub"
        },
        {
            "emoji": "📥",
            "label": "PokeAPI"
        },
    ]
}, {
    "image": "Portfolio.png",
    "title": "Portfolio",
    "maintech": "Website",
    "description": "The site you are on now! Created as a way to get more experience with React, TypeScript and using a framework, which I settled on Mantine.",
    "moreinfo": "",
    "github": "https://github.com/KieranMacGough/KieranMacGough.github.io",
    "badges": [
        {
            "emoji": "⚛️",
            "label": "React"
        },
        {
            "emoji": "🐟",
            "label": "Mantine"
        },
        {
            "emoji": "🎨",
            "label": "CSS"
        },
        {
            "emoji": "📜",
            "label": "TypeScript"
        },
        {
            "emoji": "🐱",
            "label": "GitHub"
        },
    ]
},
{
    "image": "QuickStartGuide.png",
    "title": "Quick Start Guide",
    "maintech": "Website",
    "description": "A website to assist onboarding new clients with implementation details of the companies most used APIs and their JS Plugin. Built with vanilla JS and CSS",
    "moreinfo": "https://github.com/KieranMacGough/Quick-Start-Guide",
    "github": "https://github.com/KieranMacGough/Quick-Start-Guide",
    "badges": [
        {
            "emoji": "🌐",
            "label": "HTML"
        },
        {
            "emoji": "📜",
            "label": "JavaScript"
        },
        {
            "emoji": "🎨",
            "label": "CSS"
        },
    ]
},
{
    "image": 'TheFourHorsemen.jpg',
    "title": "The Four Horsemen",
    "maintech": "Game Mod",
    "description": "The Four Horsemen is a custom story mod for Amnesia: The Dark Descent. Developed in 2013, it is still one of the highest rated Amnesia mods on ModDB (93%)",
    "moreinfo": "https://www.moddb.com/mods/the-four-horsemen",
    "github": "https://github.com/KieranMacGough/Pokedex--React-Native-",
    "badges": [
        {
            "emoji": "👼",
            "label": "AngelScript"
        },
        {
            "emoji": "⚙️",
            "label": "HPL2 Map Editor"
        },
    ]
},
]

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    },

    slashes: {
        color: theme.primaryColor,
        paddingRight: '4px'
    },
    carouselcontainer: {
     
    }

}))