import { ScrollArea, Table, Text } from '@mantine/core';
import Frame from 'components/Frame/Frame';
import SectionTitle from 'components/SectionTitle';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';

export default function Email({ context }: { context: ProjectInfo }) {
  const names = randomNames(100);

  const rows = names.map((nama, index) => {
    return (
      <tr key={nama}>
        <td>{index + 1}</td>
        <td>{nama}</td>
        <td>-</td>
        <td>-</td>
      </tr>
    );
  });
  return (
    <>
      <SectionTitle size={15} mb={10} title="Email Undangan Untuk Tes Mandiri" />
      <Frame mb={30}>
        <div>Apliksai setting dan pengirman email</div>
        <br />
        <br />
        <br />
        <br />
      </Frame>
      <SectionTitle size={15} mb={10} title="Status Pengiriman Email" />
      <Text mb={20}>Hanya menampilkan status pelaksanaan, tidak ada action.</Text>
      <ScrollArea>
        <Table verticalSpacing="xs">
          <thead>
            <tr>
              <th style={{ width: 24 }}>#</th>
              <th>Nama Peserta</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
