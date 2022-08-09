import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Paper,
  ScrollArea,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useListState, randomId } from '@mantine/hooks';
import { IconArrowsSort } from '@tabler/icons';
import Frame from 'components/Frame/Frame';
import Pojo from 'components/Pojo';
import SectionTitle from 'components/SectionTitle';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

const sampleRekomendasi = ['Kurang Disarankan', 'Disarankan', 'Sangat Disarankan'];
type Sample = {
  name: string;
  rekomendasi: string;
  value: number;
  checked: boolean;
  key: string;
  index: number;
};

function generateDaftar() {
  const rs: Sample[] = [];
  let index = 0;
  randomNames(100).forEach((name) => {
    const n = [0, 1, 2].sort(() => Math.random() - 0.5)[0];
    rs.push({
      name,
      rekomendasi: sampleRekomendasi[n],
      value: n,
      checked: false,
      key: randomId(),
      index: index,
    });
    index++;
  });
  return rs;
}

export default function Screening({ context }: { context: ProjectInfo }) {
  const theme = useMantineTheme();
  const names = randomNames(100);
  const [sorter, setSorter] = useState('');
  const [sort, setSort] = useState('asc');

  const allPersons = generateDaftar();
  const [daftar, setDaftar] = useState<Sample[]>(allPersons);
  const sdLength = daftar.filter((item) => item.value == 2).length;
  const dsLength = daftar.filter((item) => item.value == 1).length;
  const kdLength = daftar.filter((item) => item.value == 0).length;

  const initialSDValues = daftar.filter((item) => item.value == 2);
  const initialDSValues = daftar.filter((item) => item.value == 1);
  const initialKDValues = daftar.filter((item) => item.value == 0);

  const [sdValues, sdHandlers] = useListState(initialSDValues);
  const sdAllChecked = sdValues.every((item) => item.checked);
  const sdIndeterminate = sdValues.some((item) => item.checked) && !sdAllChecked;

  const sdi = (n: number) => {
    const x = daftar.filter((item) => item.value == n);
    return x.some((item) => item.checked) && !sdAll(n);
  };

  const sdAll = (n: number) => {
    const x = daftar.filter((item) => item.value == n);
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

  const sortByHasil = () => {
    setSorter('hasil');
    if (sort == 'asc') {
      setDaftar(
        daftar.sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;
          return 0;
        })
      );
      setSort('desc');
    } else {
      setDaftar(
        daftar.sort((a, b) => {
          if (a.value < b.value) return 1;
          if (a.value > b.value) return -1;
          return 0;
        })
      );
      setSort('asc');
    }
  };

  const rows = daftar.map((person: Sample, index: number) => {
    return (
      <tr key={person.key}>
        <td>{index + 1}</td>
        <td>
          <Checkbox
            color="green"
            label={person.name}
            key={person.key}
            checked={person.checked}
            onChange={(event) => {
              const array = [...daftar];
              array[index] = { ...person, checked: event.currentTarget.checked };
              setDaftar(array);
            }}
          />
        </td>
        <td
          style={{
            color:
              person.value == 2
                ? theme.colors.green[8]
                : person.value == 0
                ? theme.colors.orange[6]
                : theme.colors.green[7],
          }}
        >
          {person.rekomendasi}
        </td>
      </tr>
    );
  });

  const cb = (n: number) => (
    <Checkbox
      color="dark"
      checked={sdAll(n)}
      indeterminate={sdi(n)}
      transitionDuration={0}
      onChange={(event) => {
        const array = [...daftar];
        array.forEach((item) => {
          if (item.value == n) item.checked = event.currentTarget.checked;
        });
        setDaftar(array);
      }}
    />
  );

  const tr = (label: string, n: number) => (
    <tr>
      <td>{label}</td>
      <td style={{ width: 40 }}>{daftar.filter((item) => item.value == n).length}</td>
      <td style={{ width: 40 }}>{cb(n)}</td>
      <td style={{ width: 40 }}>
        {daftar.filter((item) => item.value == n && item.checked).length}
      </td>
    </tr>
  );

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
              {tr('Sangat Disarankan', 2)}
              {tr('Disarankan', 1)}
              {tr('Kurang Disarankan', 0)}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span>Nama Peserta</span>
                  <ActionIcon onClick={() => sortByName()}>
                    <IconArrowsSort size={14} color={sorter == 'name' ? '#000' : '#bbb'} />
                  </ActionIcon>
                </div>
              </th>
              <th>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span>Rekomensasi</span>
                  <ActionIcon onClick={() => sortByHasil()}>
                    <IconArrowsSort size={14} color={sorter == 'hasil' ? '#000' : '#bbb'} />
                  </ActionIcon>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
