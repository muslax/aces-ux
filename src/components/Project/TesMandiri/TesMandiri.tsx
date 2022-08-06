import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function TesMandiri({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        TesMandiri type: {context.type}
      </Title>
    </>
  );
}
