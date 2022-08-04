import { Center, Text } from '@mantine/core';
import Container from 'components/Layout/Container';
import AcesOperator from 'components/Logo/AcesOperator';
import { useStyles } from './Footer.styles';

export default function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Center>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AcesOperator h={24} />
            <Text size="sm" sx={{ textAlign: 'center', fontStyle: 'italic' }}>
              By Gaia Solutions
            </Text>
          </div>
        </Center>
      </Container>
    </footer>
  );
}
