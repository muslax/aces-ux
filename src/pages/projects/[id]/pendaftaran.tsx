import { ReactElement } from 'react';
import useUser from 'lib/useUser';
import { Pendaftaran } from 'components/Project/Pendaftaran/Pendaftaran';
import UserLayout from 'components/Layout/UserLayout';

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
  return (
    <UserLayout type="project-layout" page="pendaftaran" title="Pendaftaran">
      {page}
    </UserLayout>
  );
};
