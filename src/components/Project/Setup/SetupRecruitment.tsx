import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function SetupRecruitment({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        Setup type: {context.type}
      </Title>
    </>
  );
}
