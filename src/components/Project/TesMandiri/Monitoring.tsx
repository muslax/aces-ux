import { ScrollArea, Table, Text } from '@mantine/core';
import SectionTitle from 'components/SectionTitle';
import { ProjectInfo } from 'lib/queries/getProject';
import { Person } from './random-feed';

export default function Monitoring({
  context,
  daftarPeserta,
}: {
  context: ProjectInfo;
  daftarPeserta: Person[];
}) {
  const rows = daftarPeserta.map((person, index) => {
    return (
      <tr key={person.id}>
        <td>{index + 1}</td>
        <td>{person.name}</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    );
  });
  return (
    <>
      <SectionTitle size={15} mb={10} title="Status Pelaksanaan Tes Mandiri" />
      <Text mb={20}>Hanya menampilkan status pelaksanaan, tidak ada action.</Text>
      <ScrollArea>
        <Table verticalSpacing="xs">
          <thead>
            <tr>
              <th style={{ width: 24 }}>#</th>
              <th>Nama Peserta</th>
              <th>Tes 1</th>
              <th>Tes 2</th>
              <th>Tes 3</th>
              <th>Tes 4</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
