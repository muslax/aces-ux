import {
  ActionIcon,
  Checkbox,
  createStyles,
  ScrollArea,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconEye, IconEyeOff, IconArrowsSort } from '@tabler/icons';
import SectionTitle from 'components/SectionTitle';
import { useEffect, useState } from 'react';
import { Person } from './random-feed';

export default function Screening({ daftarPeserta }: { daftarPeserta: Person[] }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [daftar, setDaftar] = useState<Person[]>(daftarPeserta);
  const [sorter, setSorter] = useState('');
  const [sort, setSort] = useState('asc');
  const [filter, setFilter] = useState(false);
  const filterValue = 1;

  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);
  const [group3, setGroup3] = useState(false);

  useEffect(() => {
    if (filter) {
      setDaftar(
        daftarPeserta.filter(
          (p) => [p.va, p.vb, p.vc, p.vd].some((x) => x == filterValue) === false
        )
      );
    } else {
      let array = [...daftarPeserta];
      array.forEach((p) => {
        const proxy = daftar.find((x) => x.id == p.id);
        if ([p.va, p.vb, p.vc, p.vd].some((x) => x == filterValue)) {
          p.checked = false;
        }
        if (proxy) {
          p.hidden = proxy.hidden;
          p.checked = proxy.checked;
        }
      });
      setDaftar(array);
    }
  }, [filter]);

  const toggle = (group: string, start: number, end: number) => {
    let condition = false;
    switch (group) {
      case 'group1':
        condition = !group1;
        setGroup1(condition);
        break;
      case 'group2':
        condition = !group2;
        setGroup2(condition);
        break;
      case 'group3':
        condition = !group3;
        setGroup3(condition);
        break;
      default:
        break;
    }
    const array = [...daftar];
    array.forEach((p) => {
      if (p.vx >= start && p.vx < end) {
        // p.hidden = !p.hidden;
        p.hidden = condition;
      }
    });
    setDaftar(array);
  };

  const sdi = (start: number, end: number) => {
    const x = daftar.filter((item: Person) => item.vx >= start && item.vx < end);
    return x.some((item) => item.checked) && !sdAll(start, end);
  };

  const sdAll = (start: number, end: number) => {
    const x = daftar.filter((item: Person) => item.vx >= start && item.vx < end);
    return x.every((item) => item.checked);
  };

  const sortByName = () => {
    setSorter('name');
    if (sort == 'asc') {
      setDaftar(
        daftar.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
      );
      setSort('desc');
    } else {
      setDaftar(
        daftar.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        })
      );
      setSort('asc');
    }
  };

  const sortBy = (term: string) => {
    if (term != sorter) {
      setDaftar(
        daftar.sort((a, b) => {
          // @ts-ignore
          if (a[term] < b[term]) return 1;
          // @ts-ignore
          if (a[term] > b[term]) return -1;
          return 0;
        })
      );
      setSort('asc');
    } else {
      if (sort == 'asc') {
        setDaftar(
          daftar.sort((a, b) => {
            // @ts-ignore
            if (a[term] > b[term]) return 1;
            // @ts-ignore
            if (a[term] < b[term]) return -1;
            return 0;
          })
        );
        setSort('desc');
      } else {
        setDaftar(
          daftar.sort((a, b) => {
            // @ts-ignore
            if (a[term] < b[term]) return 1;
            // @ts-ignore
            if (a[term] > b[term]) return -1;
            return 0;
          })
        );
        setSort('asc');
      }
    }
    setSorter(term);
  };

  const rows = daftar
    .filter((person) => !person.hidden)
    .map((person: Person, index: number) => {
      return (
        <tr key={person.id}>
          <td>{index + 1}</td>
          <td>
            <Checkbox
              color="green"
              label={`${person.name}`}
              checked={person.checked}
              onChange={(event) => {
                const array = [...daftar];
                // Using index causes unpredicted result
                // array[index] = { ...person, checked: event.currentTarget.checked };
                array.forEach((p) => {
                  if (p == person) {
                    p.checked = event.currentTarget.checked;
                  }
                });

                setDaftar(array);
              }}
            />
          </td>
          <td>{person.va}</td>
          <td>{person.vb}</td>
          <td>{person.vc}</td>
          <td>{person.vd}</td>
          <td
            style={{
              color:
                person.vx >= 3.5
                  ? theme.colors.indigo[8]
                  : person.vx >= 3 && person.vx < 3.5
                  ? theme.colors.green[7]
                  : theme.colors.orange[7],
            }}
          >
            {person.vx}
          </td>
        </tr>
      );
    });

  const cb = (start: number, end: number) => (
    <Checkbox
      color="dark"
      checked={sdAll(start, end)}
      indeterminate={sdi(start, end)}
      transitionDuration={0}
      onChange={(event) => {
        const array = [...daftar];
        array.forEach((item) => {
          if (item.vx >= start && item.vx < end) item.checked = event.currentTarget.checked;
        });
        setDaftar(array);
      }}
    />
  );

  const panelRow = (group: string, label: string, start: number, end: number) => {
    const [hidden, setHidden] = useState(false);
    return (
      <tr>
        <td style={{}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: -8 }}>
            <ActionIcon
              onClick={() => {
                setHidden(!hidden);
                toggle(group, start, end);
              }}
              size={16}
            >
              {hidden && <IconEyeOff size={16} color="#000" />}
              {!hidden && <IconEye size={16} color="#000" />}
            </ActionIcon>
            <span>{label}</span>
          </div>
        </td>
        <td style={{ width: 40 }}>
          {daftar.filter((item) => item.vx >= start && item.vx < end).length}
        </td>
        <td style={{ width: 40 }}>{cb(start, end)}</td>
        <td style={{ width: 40 }}>
          {daftar.filter((item) => item.vx >= start && item.vx < end && item.checked).length}
        </td>
      </tr>
    );
  };

  return (
    <>
      <SectionTitle size={15} mb={10} title="Screening Hasil Tes Mandiri" />
      <Text mb={10}>
        Menampilkan status/hasil screening. Aplikasi screening memerlukan halaman dedicated.
      </Text>

      <Checkbox
        color="dark"
        label={`Buang yang memeliki nilai 1  + ${daftar.length}`}
        onChange={(e) => {
          setFilter(e.currentTarget.checked);
        }}
      />

      {/* PANEL */}

      <div className={classes.panel}>
        <div style={{ flexGrow: 1 }}>
          <Table verticalSpacing="xs">
            <tbody>
              {panelRow('group1', 'Sangat Disarankan', 3.5, 6)}
              {panelRow('group2', 'Disarankan', 3, 3.5)}
              {panelRow('group3', 'Kurang Disarankan', 0, 3)}
            </tbody>
          </Table>
        </div>
        <div className={classes.panelTotal}>
          <div>Total Dipilih:</div>
          <Text size={40}>{daftar.filter((item) => item.checked).length}</Text>
        </div>
      </div>

      {/* MAIN TABLE */}

      <ScrollArea>
        <Table verticalSpacing="xs">
          <thead>
            <tr>
              <th style={{ width: 24 }}>#</th>
              <th>
                <CLabel label="Nama" sort="name" sorter={sorter} clickHandler={sortByName} />
              </th>
              <th>
                <CLabel label="V1" sort="va" sorter={sorter} clickHandler={() => sortBy('va')} />
              </th>
              <th>
                <CLabel label="V2" sort="vb" sorter={sorter} clickHandler={() => sortBy('vb')} />
              </th>
              <th>
                <CLabel label="V3" sort="vc" sorter={sorter} clickHandler={() => sortBy('vc')} />
              </th>
              <th>
                <CLabel label="V4" sort="vd" sorter={sorter} clickHandler={() => sortBy('vd')} />
              </th>
              <th>
                <CLabel label="Reko" sort="vx" sorter={sorter} clickHandler={() => sortBy('vx')} />
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}

interface CLabelProps {
  label: string;
  sort: string;
  sorter: string;
  clickHandler: () => void;
}
function CLabel({ label, sort, sorter, clickHandler }: CLabelProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <span>{label}</span>
      <ActionIcon onClick={clickHandler} size={15}>
        <IconArrowsSort size={14} color={sorter == sort ? '#000' : '#bbb'} />
      </ActionIcon>
    </div>
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
