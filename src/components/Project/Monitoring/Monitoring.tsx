import { Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';

export function Monitoring({ context }: { context: ProjectInfo }) {
  return (
    <>
      <Title order={4} mb={10}>
        Monitoring type: {context.type}
      </Title>
      Depends on what's going on: tes mandiri or tes interaktif
      <br />
      When all is over, it is empty, maybe just link to laporan
    </>
  );
}
