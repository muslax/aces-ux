import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import { Overview } from 'components/Project';
import UserLayout from 'components/Layout/UserLayout';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return (
    <>
      <Overview context={projectContext} />
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="overview" title="Projects">
      {page}
    </UserLayout>
  );
};
