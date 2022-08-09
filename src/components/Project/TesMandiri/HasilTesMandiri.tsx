import { createStyles, ScrollArea, Table } from '@mantine/core';
import Container from 'components/Layout/Container';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#f0f3f6',
    transition: 'box-shadow 150ms ease',
    zIndex: 9,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9,
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function HasilTesMandiri({ context }: { context: ProjectInfo }) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [names, setNames] = useState(randomNames(100));

  const rows = names.map((name, index) => (
    <tr key={name}>
      <td style={{ padding: 0, width: 0 }}></td>
      <td>{index + 1}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{name}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  ));

  return (
    <div style={{ marginTop: 0 }}>
      <ScrollArea sx={{ height: '100vh' }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Container>
          <Table verticalSpacing="xs">
            <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
              <tr style={{ borderBottom: '1px solid red' }}>
                <th style={{ padding: 0, width: 0 }}></th>
                <th>No.</th>
                <th>Nama&nbsp;Lengkap</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
                <th>Kolom&nbsp;1</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </ScrollArea>
    </div>
  );
}
