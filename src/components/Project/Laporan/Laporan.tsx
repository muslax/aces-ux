import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function Laporan({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        Laporan type: {context.type}
      </Title>
    </>
  );
}
