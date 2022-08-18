import { ActionIcon, Checkbox, ScrollArea, Table, useMantineTheme } from '@mantine/core';
import { IconArrowsSort } from '@tabler/icons';
import { Dispatch, useEffect, useState } from 'react';
import { Person } from './random-feed';

interface ScreeningTableProps {
  daftar: Person[];
  setDaftar: Dispatch<Person[]>;
}
export default function ScreeningTable({ daftar, setDaftar }: ScreeningTableProps) {
  const theme = useMantineTheme();
  const [sorter, setSorter] = useState('name');
  const [sort, setSort] = useState('asc');
  const [list, setList] = useState(daftar);

  useEffect(() => {
    if (sorter == 'name') sortByName(true);
    else sortBy(sorter, true);
    setList(daftar);
  }, [daftar]);

  const sortByName = (flag = false) => {
    setSorter('name');
    if (flag) {
      setDaftar(
        daftar.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
      );
    } else {
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
    }
  };

  const sortBy = (term: string, flag = false) => {
    if (flag) {
      setDaftar(
        daftar.sort((a, b) => {
          // @ts-ignore
          if (a[term] < b[term]) return 1;
          // @ts-ignore
          if (a[term] > b[term]) return -1;
          return 0;
        })
      );
    } else {
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
      // setSorter(term);
    }
    setSorter(term);
  };

  const rows = list
    .filter((person) => !person.hidden)
    .map((person: Person, index: number) => {
      if (person.hidden) return <></>;
      return (
        <tr key={person.id} style={{ display: person.hidden ? 'table-row' : 'table-row' }}>
          <td>{index + 1}</td>
          <td>
            <Checkbox
              color="green"
              label={`${person.name}`}
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

  return (
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
