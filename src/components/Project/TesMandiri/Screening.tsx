import { Checkbox, ScrollArea, Table, Text } from '@mantine/core';
import SectionTitle from 'components/SectionTitle';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';

export default function Screening({ context }: { context: ProjectInfo }) {
  const names = randomNames(100);

  const rows = names.map((nama, index) => {
    return (
      <tr key={nama}>
        <td>{index + 1}</td>
        <td>
          <Checkbox color="green" label={nama} />
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    );
  });
  return (
    <>
      <SectionTitle size={15} mb={10} title="Screening Hasil Tes Mandiri" />
      <Text mb={20}>
        Menampilkan status/hasil screening. Aplikasi screening memerlukan halaman dedicated.
      </Text>
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
