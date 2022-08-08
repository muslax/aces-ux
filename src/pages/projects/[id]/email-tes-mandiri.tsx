import { ReactElement, useContext } from 'react';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import { EditModules } from 'components/Project';
import UserLayout from 'components/Layout/UserLayout';
import { EmailTesMandiri } from 'components/Project/Email';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  if (!projectContext) return <></>;

  return (
    <>
      <EmailTesMandiri context={projectContext} />
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="single-form" page="edit-modules" title="Edit Modules">
      {page}
    </UserLayout>
  );
};
