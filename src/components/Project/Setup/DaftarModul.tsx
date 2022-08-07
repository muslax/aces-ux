import { useContext } from 'react';
import { ScrollArea, Table } from '@mantine/core';
import ProjectContext from 'components/ProjectProvider';
import { Module } from 'lib/modules';

export default function DaftarModul() {
  const { projectContext } = useContext(ProjectContext);
  // Data should come from database
  const data: Module[] = [
    {
      type: 'I360',
      method: 'selftest',
      duration: 75,
      name: 'Modul 360 - Aku Ini Memang Enjoy',
      description: 'Definisi atau keterangan singkat tentang modul ini...',
      conflictWith: '',
    },
    {
      type: 'GPQ',
      method: 'selftest',
      duration: 75,
      name: 'GPQ - Gaia Personability Questionnaire',
      description: 'Definisi atau keterangan singkat tentang modul ini...',
      conflictWith: '',
    },
    {
      type: 'G_GATE',
      method: 'selftest',
      duration: 75,
      name: 'G-GATE - Aku Ini Memang Enjoy',
      description: 'Definisi atau keterangan singkat tentang modul ini...',
      conflictWith: '',
    },
  ];

  const rows = data.map((module, index) => (
    <tr key={module.type}>
      <td>{index + 1}</td>
      <td style={{ fontWeight: 500 }}>{module.name}</td>
      <td>{module.method.replace(/^\w/, (c) => c.toUpperCase())}</td>
      <td>{module.duration} menit</td>
    </tr>
  ));

  return (
    <ScrollArea sx={{ borderRadius: 5 }}>
      <Table verticalSpacing="xs" horizontalSpacing={6} style={{}}>
        <thead style={{ borderBottom: '1px solid #ccc', backgroundColor: '#f0f3f6' }}>
          <tr>
            <th style={{ padding: 8, width: 30, textAlign: 'left', fontWeight: 500 }}>#</th>
            <th style={{ padding: 8, textAlign: 'left', fontSize: 13, fontWeight: 500 }}>
              Nama modul
            </th>
            <th style={{ padding: 8, textAlign: 'left', fontSize: 13, fontWeight: 500 }}>Metode</th>
            <th
              style={{ padding: 8, width: 100, textAlign: 'left', fontSize: 13, fontWeight: 500 }}
            >
              Waktu
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
