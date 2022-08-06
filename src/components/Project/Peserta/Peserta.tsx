import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function Peserta({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        Peserta type: {context.type}
      </Title>
    </>
  );
}
