import { ScrollArea, Table } from '@mantine/core';
import { Module } from 'lib/modules';

export default function ModulesTable({ modules }: { modules: Module[] }) {
  const rows = modules.map((module, index) => (
    <tr key={module.type}>
      <td>{index + 1}</td>
      <td style={{ fontWeight: 500 }}>{module.name}</td>
      <td>{module.method.replace(/^\w/, (c) => c.toUpperCase())}</td>
      <td>{module.duration} menit</td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table verticalSpacing="xs" horizontalSpacing={6} style={{}}>
        <thead style={{ borderBottom: '1px solid #ccc' }}>
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
