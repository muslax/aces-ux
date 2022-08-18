import { ScrollArea, Table, Text } from '@mantine/core';
import Frame from 'components/Frame/Frame';
import SectionTitle from 'components/SectionTitle';
import { ProjectInfo } from 'lib/queries/getProject';
import Link from 'next/link';
import { Person } from './random-feed';

export default function Email({
  context,
  daftarPeserta,
}: {
  context: ProjectInfo;
  daftarPeserta: Person[];
}) {
  // const names = randomNames(100);

  const rows = daftarPeserta.map((person, index) => {
    return (
      <tr key={person.id}>
        <td>{index + 1}</td>
        <td>{person.name}</td>
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
        <Link href={`/projects/${context.id}/email-tes-mandiri`}>
          <a>Preview/Edit Email</a>
        </Link>
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
