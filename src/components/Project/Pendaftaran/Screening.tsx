import { createStyles, ScrollArea, Stack, Table, Text, useMantineTheme } from '@mantine/core';
import Frame from 'components/Frame/Frame';
import Chekbox from 'components/Inputs/Chekbox';
import Notice from 'components/Notice/Notice';
import Show from 'components/Show';
import { ReactNode, useState } from 'react';

const useStyles = createStyles((theme) => ({
  scrollArea: {
    borderTop: `1px solid ${theme.colors.gray[3]}`,
  },
  header: {
    position: 'sticky',
    zIndex: 9,
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },

  cb: { cursor: 'pointer' },
  cbLabel: { cursor: 'pointer' },
}));

export function Screening({ names }: { names: string[] }) {
  const theme = useMantineTheme();
  const colors = theme.colors;
  const [step, setStep] = useState(1);

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  // const { ref, width } = useElementSize();

  const rows = names.map((row, index) => (
    <tr key={row}>
      <td>{index + 1}</td>
      <td>
        <Chekbox
          color="green"
          label={row}
          classNames={{ input: classes.cb, label: classes.cbLabel }}
        />
      </td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  ));

  const Field = ({ name, value }: { name: string; value: string | number }) => {
    return (
      <div style={{ display: 'flex', gap: 10, fontSize: 13 }}>
        <div style={{ flexGrow: 1 }}>{name}</div>
        <div>{value}</div>
      </div>
    );
  };

  return (
    <>
      <Notice
        color="gray"
        closeable
        isOpen={step === 1}
        onClose={() => {
          setStep(0);
          setTimeout(() => setStep(step + 1), 80);
        }}
      >
        <Text size="md" weight={700} mb={10} color={colors.pink[6]}>
          State 1 - Pendaftaran belum ditutup
        </Text>
        <Text size="md" mb={10}>
          Jadi belum ada yang dapat dimonitor.
          <br />
          &rarr; Countdown?
          <br />
          &rarr; Warning?
          <br />
          &rarr; Useful links?
        </Text>
      </Notice>
      <Show when={step === 2}>
        <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <StatFrame width={150} title="5 Kota Terbesar">
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
          </StatFrame>
          <StatFrame width={150} title="5 Kota Terbesar">
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
          </StatFrame>
          <StatFrame width={150} title="5 Kota Terbesar" color={theme.colors.green[6]}>
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
          </StatFrame>
          <StatFrame width={150} title="5 Kota Terbesar">
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
            <Field name="Surabaya" value={230} />
          </StatFrame>
        </div>

        <Text size="lg" weight={600} mt={0} mb={10} onClick={() => setStep(1)}>
          Daftar lengkap pendaftar
        </Text>

        <div style={{}}>
          <ScrollArea
            style={{ height: 400 }}
            className={classes.scrollArea}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
          >
            <Table sx={{ minWidth: 500 }} verticalSpacing="xs">
              <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                <tr>
                  <th style={{ width: 20 }}>#</th>
                  <th>Nama Lengkap</th>
                  <th>L&nbsp;/&nbsp;P</th>
                  <th>Domisili</th>
                  <th>PT</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      </Show>
    </>
  );
}

function StatFrame({
  title,
  color,
  width = 180,
  children,
}: {
  title: string;
  color?: string;
  width?: number;
  children: ReactNode;
}) {
  const theme = useMantineTheme();
  return (
    <Frame w={width} contrast={2} rounded>
      <div style={{ margin: '-5px -2px' }}>
        <Text size="sm" weight={500} mb={12}>
          <span
            style={{
              borderBottom: `3px solid ${color || theme.colors.gray[4]}`,
              paddingBottom: 3,
            }}
          >
            {title}
          </span>
        </Text>
        <Stack spacing={4}>{children}</Stack>
      </div>
    </Frame>
  );
}
