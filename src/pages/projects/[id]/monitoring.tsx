import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import UserLayout from 'components/Layout/UserLayout';
import { Monitoring } from 'components/Project';
import Pojo from 'components/Pojo';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return <Monitoring context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="monitoring" title="Monitoring">
      {page}
    </UserLayout>
  );
};
