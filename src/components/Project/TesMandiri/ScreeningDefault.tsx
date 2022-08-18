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
  const [variations, setVariations] = useState<number[]>([]);
  const [withoutLowestItemValue, setWithoutLowestItemValue] = useState(true);
  const handlers = useRef<NumberInputHandlers>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let x = 5,
      values: number[] = [];
    daftarPeserta.forEach((p) => {
      if (p.vx < x) x = p.vx;
      if (!values.includes(p.vx)) values.push(p.vx);
    });
    setLowValue(x);
    setVariations(values);
  }, [daftarPeserta]);

  useEffect(() => {
    const array = daftarPeserta.filter((p) => p.vx >= batasBawah);
    array.forEach((p) => {
      const proxy = daftar.find((x) => x.id == p.id);
      p.checked = proxy ? proxy.checked : false;
    });
    if (withoutLowestItemValue) {
      setDaftar(
        daftarPeserta
          .filter((p) => p.vx >= batasBawah)
          .filter((p) => [p.va, p.vb, p.vc, p.vd].some((x) => x == 1) === false)
      );
    } else {
      setDaftar(daftarPeserta.filter((p) => p.vx >= batasBawah));
    }
    return () => {};
  }, [batasBawah, withoutLowestItemValue]);

  return (
    <>
      <Text>Batas Bawah: {batasBawah}</Text>
      <div className={classes.panel}>
        <div style={{ flexGrow: 1 }}>
          <Table verticalSpacing="xs">
            <tbody>
              <tr>
                <td style={{ paddingLeft: 16, width: 120 }}>Syarat&nbsp;minimal:</td>
                <td>
                  <NumberInput
                    value={batasBawah}
                    onChange={(val) => setBatasBawah(val || batasBawah)}
                    handlersRef={handlers}
                    min={lowValue}
                    precision={2}
                    max={5}
                    step={0.25}
                    styles={{ root: { width: 75 } }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: 16 }}>
                  <Checkbox
                    color="dark"
                    label="Tanpa nilai merah"
                    checked={withoutLowestItemValue}
                    onChange={(e) => {
                      setWithoutLowestItemValue(e.currentTarget.checked);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className={classes.panelTotal}>
          <Stat label="Pendaftar" value={daftarPeserta.length} />
        </div>
        <div className={classes.panelTotal}>
          <Stat label="Terfilter" value={daftar.length} />
        </div>
        <div className={classes.panelTotal}>
          <Stat label="Dipilih" value={daftar.filter((item) => item.checked).length} />
        </div>
      </div>

      <ScreeningTable daftar={daftar} setDaftar={setDaftar} />
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <Text size={13}>{label}:</Text>
      <Text size={30}>{value}</Text>
    </div>
  );
}

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

  panel: {
    marginTop: 20,
    marginBottom: 20,
    // padding: '2px 10px',
    // backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'stretch',
  },

  panelTotal: {
    flexBasis: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    borderLeft: `1px solid ${theme.colors.gray[3]}`,
    padding: '15px 10px',
  },
}));
