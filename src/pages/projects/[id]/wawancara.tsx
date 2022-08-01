import { ReactElement, useContext } from 'react';
import { Text } from '@mantine/core';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import ProjectLayout from 'components/Layout/ProjectLayout';
import Pojo from 'components/Pojo';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  return (
    <>
      <div>
        <Text>
          If you need multiple layouts, you can add a property getLayout to your page, allowing you
          to return a React component for the layout. This allows you to define the layout on a
          per-page basis. Since we're returning a function, we can have complex nested layouts if
          desired.
        </Text>
        <Pojo object={projectContext} />
      </div>
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout title="Wawancara">{page}</ProjectLayout>;
};
