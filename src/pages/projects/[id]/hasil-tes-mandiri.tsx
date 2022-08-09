import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import UserLayout from 'components/Layout/UserLayout';
import { HasilTesMandiri } from 'components/Project/TesMandiri/HasilTesMandiri';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return <HasilTesMandiri context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="fixed" page="hasil-tes-mandiri" title="Tes Mandiri">
      {page}
    </UserLayout>
  );
};
