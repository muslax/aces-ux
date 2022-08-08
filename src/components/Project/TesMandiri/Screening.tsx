import { ActionIcon, Checkbox, ScrollArea, Table, Text, useMantineTheme } from '@mantine/core';
import { IconArrowsSort } from '@tabler/icons';
import SectionTitle from 'components/SectionTitle';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

const sampleRekomendasi = ['Kurang Disarankan', 'Disarankan', 'Sangat Disarankan'];
type Sample = {
  name: string;
  rekomendasi: string;
  value: number;
};

export default function Screening({ context }: { context: ProjectInfo }) {
  const theme = useMantineTheme();
  const names = randomNames(100);
  const [daftar, setDaftar] = useState<Sample[]>([]);
  const [sorter, setSorter] = useState('');
  const [sort, setSort] = useState('asc');

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

  useEffect(() => {
    const rs: Sample[] = [];
    names.forEach((name) => {
      const n = [0, 1, 2].sort(() => Math.random() - 0.5)[0];
      rs.push({
        name,
        rekomendasi: sampleRekomendasi[n],
        value: n,
      });
    });
    setDaftar(rs);
    return () => {};
  }, []);

  const rekomendasi = () => {
    const n = [0, 1, 2].sort(() => Math.random() - 0.5)[0];
    return sampleRekomendasi[n];
  };

  const rows = daftar.map((person, index) => {
    return (
      <tr key={person.name}>
        <td>{index + 1}</td>
        <td>
          <Checkbox color="green" label={person.name} />
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
  return (
    <>
      <SectionTitle size={15} mb={10} title="Screening Hasil Tes Mandiri" />
      <Text mb={10}>
        Menampilkan status/hasil screening. Aplikasi screening memerlukan halaman dedicated.{' '}
        {sorter}
      </Text>
      <div style={{ marginBottom: 20 }}>
        <Text weight={500}>Sangat Disarankan: {daftar.filter((n) => n.value == 2).length}</Text>
        <Text weight={500}>Disarankan: {daftar.filter((n) => n.value == 1).length}</Text>
        <Text weight={500}>Kurang Disarankan: {daftar.filter((n) => n.value == 0).length}</Text>
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
