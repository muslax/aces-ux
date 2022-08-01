import { Text } from '@mantine/core';
import UserLayout from 'components/Layout/UserLayout';
import Pojo from 'components/Pojo';
import ProjectContext from 'components/ProjectProvider';
import useUser from 'lib/useUser';
import Link from 'next/link';
import { ReactElement, useContext } from 'react';

export default function Projects() {
  const { user } = useUser({ redirectTo: '/login' });
  // Test access project context outside ProjectLayout
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
        <p>
          <Link href="/projects/bogus-assessment">
            <a>Sample Assessment Center</a>
          </Link>
        </p>
        <p>
          <Link href="/projects/bogus-competence">
            <a>Sample Competence</a>
          </Link>
        </p>
        <p>
          <Link href="/projects/bogus-recruitment">
            <a>Sample Recruitment</a>
          </Link>
        </p>
        <p>
          <Link href="/projects/bogus-potrev">
            <a>Sample Potrev</a>
          </Link>
        </p>
        <p>
          <Link href="/projects/bogus">
            <a>Project Bogus</a>
          </Link>
        </p>
        <Pojo object={projectContext} />
      </div>
    </>
  );
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="Cordoba" title="Projects">
      {page}
    </UserLayout>
  );
};
