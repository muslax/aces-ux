import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import UserLayout from 'components/Layout/UserLayout';
import { Deployment } from 'components/Project';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return <Deployment context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="deploy" title="Deployment">
      {page}
    </UserLayout>
  );
};
