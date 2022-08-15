import { ActionIcon, Checkbox, ScrollArea, Table, Text, useMantineTheme } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconEye, IconEyeOff, IconArrowsSort } from '@tabler/icons';
import Pojo from 'components/Pojo';
import SectionTitle from 'components/SectionTitle';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';
import { useEffect, useState } from 'react';
import { Person, randomFeed } from './random-feed';

export default function Screening({ context }: { context: ProjectInfo }) {
  const theme = useMantineTheme();
  const [daftar, setDaftar] = useState<Person[]>(randomFeed(1000));
  const [sorter, setSorter] = useState('');
  const [sort, setSort] = useState('asc');

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

  const sortBy = (sorter: string) => {
    setSorter(sorter);
    if (sort == 'asc') {
      setDaftar(
        daftar.sort((a, b) => {
          // @ts-ignore
          if (a[sorter] > b[sorter]) return 1;
          // @ts-ignore
          if (a[sorter] < b[sorter]) return -1;
          return 0;
        })
      );
      setSort('desc');
    } else {
      setDaftar(
        daftar.sort((a, b) => {
          // @ts-ignore
          if (a[sorter] < b[sorter]) return 1;
          // @ts-ignore
          if (a[sorter] > b[sorter]) return -1;
          return 0;
        })
      );
      setSort('asc');
    }
  };

  const rows = daftar.map((person: Person, index: number) => {
    if (person.hidden) return <></>;
    return (
      <tr key={person.key} style={{ display: person.hidden ? 'table-row' : 'table-row' }}>
        <td>{index + 1}</td>
        <td>
          <Checkbox
            color="green"
            label={`${person.name}`}
            key={person.key}
            checked={person.checked}
            onChange={(event) => {
              const array = [...daftar];
              array[index] = { ...person, checked: event.currentTarget.checked };
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

  const toggle = (start: number, end: number) => {
    const array = [...daftar];
    array.forEach((item) => {
      if (item.vx >= start && item.vx < end) item.hidden = !item.hidden;
    });
    setDaftar(array);
  };

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

  const tr = (label: string, start: number, end: number) => {
    const [hidden, setHidden] = useState(false);
    return (
      <tr>
        <td style={{}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: -8 }}>
            <ActionIcon
              onClick={() => {
                setHidden(!hidden);
                toggle(start, end);
              }}
              size={16}
            >
              <IconEye size={16} color={hidden ? '#bbb' : '#000'} />
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
      <a
        href={`/projects/${context.id}/hasil-tes-mandiri`}
        target="_blank"
        style={{ color: theme.black }}
      >
        Hasil lengkap Tes Mandiri
      </a>
      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
          padding: '2px 10px',
          backgroundColor: theme.colors.gray[0],
          border: `1px solid ${theme.colors.gray[3]}`,
          borderRadius: 5,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Table verticalSpacing="xs">
            <tbody>
              {tr('Sangat Disarankan', 3.5, 6)}
              {tr('Disarankan', 3, 3.5)}
              {tr('Kurang Disarankan', 0, 3)}
            </tbody>
          </Table>
        </div>
        <div
          style={{
            flexBasis: 150,
            flexShrink: 0,
            textAlign: 'center',
            borderLeft: `1px solid ${theme.colors.gray[3]}`,
            padding: '20px 5px 10px 15px',
          }}
        >
          <div>Total Dipilih:</div>
          <Text size={40}>{daftar.filter((item) => item.checked).length}</Text>
        </div>
      </div>
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
