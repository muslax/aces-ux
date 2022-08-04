import { ReactElement } from 'react';
import useUser from 'lib/useUser';
import ProjectLayout from 'components/Layout/ProjectLayout';
import { Pendaftaran } from 'components/Project/Pendaftaran/Pendaftaran';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  // const { projectContext } = useContext(ProjectContext);

  // =====================================================================
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  // =====================================================================
  return <Pendaftaran />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout title="Pendaftaran">{page}</ProjectLayout>;
};
