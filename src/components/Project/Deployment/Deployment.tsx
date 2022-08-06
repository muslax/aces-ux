import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function Deployment({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        Deployment type:
      </Title>
      Deployment setup for both tes mandiri and tes interaktif
      <br />
      When all is over, it is empty, maybe just link to laporan
    </>
  );
}
