import { ScrollArea, Table } from '@mantine/core';
import Pojo from 'components/Pojo';
import { Norm } from 'lib/norms';
import useAuthApi from 'lib/useAuthApi';

export default function DaftarNorma({ type }: { type: string }) {
  const { data } = useAuthApi('random-norms', type);

  if (!data) return <>...</>;

  const rows = data.map((item: Norm, index: number) => (
    <tr key={item.name}>
      <td>{index + 1}</td>
      <td style={{ fontWeight: 500 }}>{item.name}</td>
      <td>{item.group.replace(/^\w/, (c) => c.toUpperCase())}</td>
    </tr>
  ));

  return (
    <ScrollArea sx={{ borderRadius: 5 }}>
      <Table verticalSpacing="xs" horizontalSpacing={6} style={{}}>
        <thead style={{ borderBottom: '1px solid #ccc', backgroundColor: '#f0f3f6' }}>
          <tr>
            <th style={{ padding: 8, width: 30, textAlign: 'left', fontWeight: 500 }}>#</th>
            <th style={{ padding: 8, textAlign: 'left', fontSize: 13, fontWeight: 500 }}>
              Jenis Tolok Ukur
            </th>
            <th
              style={{
                padding: 8,
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
