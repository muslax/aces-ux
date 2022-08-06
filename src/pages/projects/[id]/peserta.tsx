import { ReactElement, useContext } from 'react';
import { Text } from '@mantine/core';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import Pojo from 'components/Pojo';
import UserLayout from 'components/Layout/UserLayout';
import { Peserta } from 'components/Project';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });

  const { projectContext } = useContext(ProjectContext);
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return <Peserta context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="peserta" title="Peserta">
      {page}
    </UserLayout>
  );
};
