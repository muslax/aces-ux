import { ScrollArea, Table } from '@mantine/core';
import { Benchmark } from 'lib/benchmark';

export default function TolokUkur({ items }: { items: Benchmark[] }) {
  const rows = items.map((item: Benchmark, index: number) => (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td style={{ fontWeight: 500 }}>{item.name}</td>
      <td>{item.rgroup.replace(/-/, ' ').replace(/^\w/, (c) => c.toUpperCase())}</td>
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
            <th
              style={{
                padding: 8,
                width: '30%',
                whiteSpace: 'nowrap',
                textAlign: 'left',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Domain
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
