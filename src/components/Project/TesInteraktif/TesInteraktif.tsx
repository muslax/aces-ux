import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function TesInteraktif({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        TesInteraktif type: {context.type}
      </Title>
    </>
  );
}
