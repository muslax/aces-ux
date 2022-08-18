import {
  ActionIcon,
  createStyles,
  Checkbox,
  NumberInput,
  NumberInputHandlers,
  ScrollArea,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconEye, IconEyeOff, IconArrowsSort } from '@tabler/icons';
import { useEffect, useRef, useState } from 'react';
import { Person } from './random-feed';
import ScreeningTable from './ScreeningTable';

export default function ScreeningDefault({ daftarPeserta }: { daftarPeserta: Person[] }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [daftar, setDaftar] = useState<Person[]>(daftarPeserta);
  const [batasBawah, setBatasBawah] = useState(3.75);
  const [lowValue, setLowValue] = useState(1);

  useEffect(() => {
    let x = 5;
    daftarPeserta.forEach((p) => {
      if (p.vx < x) x = p.vx;
    });
    setLowValue(x);
  }, [daftarPeserta]);

  useEffect(() => {
    const array = daftarPeserta.filter((p) => p.vx >= batasBawah);
    array.forEach((p) => {
      const proxy = daftar.find((x) => x.id == p.id);
      p.checked = proxy ? proxy.checked : false;
    });
    setDaftar(daftarPeserta.filter((p) => p.vx >= batasBawah));
    return () => {};
  }, [batasBawah]);

  const TRX = (label: string) => {
    const [hidden, setHidden] = useState(false);
    const handlers = useRef<NumberInputHandlers>();
    return (
      <tr>
        <td style={{}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: -8 }}>
            <ActionIcon
              onClick={() => {
                setHidden(!hidden);
                // toggle(start, end);
              }}
              size={16}
            >
              {hidden && <IconEyeOff size={16} color="#000" />}
              {!hidden && <IconEye size={16} color="#000" />}
            </ActionIcon>
            <span>{label}</span>
          </div>
        </td>
        <td>
          <NumberInput
            value={batasBawah}
            onChange={(val) => setBatasBawah(val || batasBawah)}
            handlersRef={handlers}
            min={lowValue}
            precision={2}
            max={5}
            step={0.25}
            styles={{ root: { width: 80 } }}
          />
        </td>
        <td style={{ width: 40 }}>xx</td>
        <td style={{ width: 40 }}>xx</td>
        <td style={{ width: 40 }}>XX</td>
      </tr>
    );
  };

  return (
    <>
      <Text>Batas Bawah: {batasBawah}</Text>
      <div className={classes.panel}>
        <div style={{ flexGrow: 1 }}>
          <Table verticalSpacing="xs">
            <tbody>{TRX('Exp')}</tbody>
          </Table>
        </div>
        <div className={classes.panelTotal}>
          <div>Total Dipilih:</div>
          <Text size={40}>{daftar.filter((item) => item.checked).length}</Text>
        </div>
      </div>

      <Checkbox
        color="dark"
        label={`Buang yang memeliki nilai 1  + ${daftar.length}`}
        onChange={(e) => {
          // setFiltered(e.currentTarget.checked);
          // setDaftar(getPopulation(e.currentTarget.checked));
        }}
      />

      <ScreeningTable daftar={daftar} setDaftar={setDaftar} />
    </>
  );
}

const useStyles = createStyles((theme) => ({
  panel: {
    marginTop: 20,
    marginBottom: 20,
    padding: '2px 10px',
    // backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'stretch',
  },

  panelTotal: {
    flexBasis: 150,
    flexShrink: 0,
    textAlign: 'center',
    borderLeft: `1px solid ${theme.colors.gray[3]}`,
    padding: '20px 5px 10px 15px',
  },
}));
