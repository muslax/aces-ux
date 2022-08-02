import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import ProjectLayout from 'components/Layout/ProjectLayout';
import Overview from 'components/Project/Overview/Overview';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  return (
    <>
      <Overview />
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout title="Project Info">{page}</ProjectLayout>;
};
