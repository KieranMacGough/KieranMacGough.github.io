import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import TheFourHorsemen from '../images/TheFourHorsemen.jpg'
import PokedexApp from '../images/PokedexApp.png'
import { classicNameResolver } from 'typescript';

const useStyles = createStyles((theme) => ({
    carousel: {
        overflow: 'visible'
    },
    card: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 32,
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    desc: {
        marginTop: theme.spacing.xs,
        color: theme.white,
    }
}));

interface CardProps {
    image: string;
    title: string;
    desc: string;
    category: string;
}

function Card({ image, title, desc, category }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
                <Text className={classes.desc}>{desc}</Text>
            </div>
            <Button variant="white" color="dark">
                See More
            </Button>
        </Paper>
    );
}

const data = [
    {
        image: PokedexApp,
        title: 'Pokedex App',
        desc: 'A mobile Pokedex app, using data from PokeApi',
        category: 'React Native',
    },
    {
        image: TheFourHorsemen,
        title: 'The Four Horsemen',
        desc: 'A custom story mod for Amnesia: The Dark Descent',
        category: 'AngelScript',
    },
];

export function ProjectsCarosel() {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            className={classes.carousel}
        >
            {slides}
        </Carousel>
    );
}