import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import UserLayout from 'components/Layout/UserLayout';
import { Pendaftaran } from 'components/Project';
import ProjectContext from 'components/ProjectProvider';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // =====================================================================
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;
  return <Pendaftaran context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="pendaftaran" title="Pendaftaran">
      {page}
    </UserLayout>
  );
};
