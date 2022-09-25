import { Container, createStyles, Footer, Text } from '@mantine/core';

export default function FooterSection() {
    const { classes } = useStyles();
    return (
        <Footer height={60} p="md" className={classes.root}>
            <Container className={classes.footer}>
                <Text className={classes.text}>Made by Kieran MacGough</Text>
            </Container>
        </Footer>
    )
}

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    }
}))