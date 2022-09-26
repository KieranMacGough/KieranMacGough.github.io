import { createStyles } from '@mantine/core';

interface HeadingProps{
    sectionId: string;
    text: string;
}

function SectionHeading({sectionId, text}: HeadingProps) {
    const { classes } = useStyles();
    return (
        <>
            <h1 id={sectionId} className={classes.title}><span className={classes.slashes}>//</span>{text}</h1>
        </>
    )
}

export default SectionHeading;

const useStyles = createStyles((theme) => ({
title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
},

slashes: {
    color: theme.primaryColor,
    paddingRight: '4px'
}
}))