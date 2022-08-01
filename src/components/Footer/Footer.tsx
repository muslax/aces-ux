import { Text } from '@mantine/core';
import Container from 'components/Layout/Container';
import { useStyles } from './Footer.styles';

export default function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Text size="xs" sx={{ textAlign: 'center' }}>
          ACES by Gaia
        </Text>
      </Container>
    </footer>
  );
}
