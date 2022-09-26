import { createStyles, Avatar, Text, Group, Image, Container } from '@mantine/core';
import email from '../images/email.svg';
import me from '../images/me.jpg';
import linkedin from '../images/linkedin.svg';
import SectionHeading from './SectionHeading';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    maingroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.sm,
        borderColor: 'orange',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: theme.radius.md
    },
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

interface ContactSectionProps {
    avatar: string;
    name: string;
    title: string;
    phone: string;
    email: string;
}

export function ContactSection() {
    const { classes } = useStyles();
    return (
        <div>
            <SectionHeading sectionId="contact" text="Contact Me" />
            <Container className={classes.container}>
            <Group className={classes.maingroup} position="center">
                <Avatar src={me} size={115} radius="md" />
                <div>
                    <Text size="md" sx={{ textTransform: 'uppercase', textAlign: 'center' }} weight={700} color="dimmed" >
                        Frontend Developer
                    </Text>

                    <Text size="xl" sx={{ textAlign: 'center' }}weight={500} className={classes.name} >
                        Kieran MacGough
                    </Text>

                    <a target="_blank" rel="noreferrer" href="mailto:kieran.macgough@gmail.com" style={{ textDecoration: 'underline orange' }}>
                    <Group noWrap spacing={10} mt={3}>
                        <Image src={email} height={16} width={16} className={classes.icon} />
                        <Text size="md" color="dimmed">
                            kieran.macgough@gmail.com
                        </Text>
                    </Group>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kieran-macgough/" style={{ textDecoration: 'underline orange' }}>
                        <Group noWrap spacing={10} mt={5}>
                            <Image src={linkedin} height={16} width={16} className={classes.icon} />
                            <Text size="md" color="dimmed" >
                                /kieran.macgough
                            </Text>
                        </Group>
                    </a>
                </div>
            </Group>
            </Container>
        </div>
    );
}