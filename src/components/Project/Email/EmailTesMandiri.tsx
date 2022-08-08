import { Text, Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function EmailTesMandiri({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={2}>Email Tes Mandiri</Title>
      <Text>Judul Proyek: {context.title}</Text>
      <Text>Tipe Proyek: {context.type}</Text>
    </>
  );
}
