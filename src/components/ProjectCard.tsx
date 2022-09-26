import GitHubIcon from '../images/github.svg';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    flexGrow: 1,
    flexBasis: '50%',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexBasis: '50%',
    }
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  maintech: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
  github: string;
  moreinfo: string;
}

export function ProjectCard({ image, title, description, maintech, badges, github, moreinfo }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));



  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={require(`../images/${image}`)} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md" style={{ minHeight: '170px' }} >
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{maintech}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section} style={{ minHeight: '90px' }} >
        <Text mt="md" className={classes.label} color="dimmed">
          Technologies used:
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs" style={{ display: 'flex', justifyContent: 'space-between'}}>
        <a href={moreinfo} target="_blank" rel="noreferrer">
          <Button radius="md" style={{ flex: 1 }}>
            See more
          </Button>
        </a>
        <ActionIcon variant="default" radius="md" size={36}>
          <a href={github} target="_blank" rel="noreferrer"><Image src={GitHubIcon} /></a>
        </ActionIcon>
      </Group>
    </Card>
  );
}