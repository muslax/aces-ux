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

        <div style={{ height: 100 }}>
          <svg id="logo" height="42" viewBox="0 0 42 42" width="42">
            <g id="ampersand">
              <path d="M26.46 20.573c.464.767 1.136 1.103 1.852 1.103 1.22 0 2.22-1.02 2.22-2.34 0-1.3-.92-2.24-2.22-2.24-.98 0-1.986.512-3.049 2.227-.235-1.38-1.318-2.16-2.558-2.244.369-.55.506-1.128.506-1.803 0-1.78-1.68-3.66-4.76-3.66-3.38 0-5.5 2.08-5.5 4.26 0 1.46.641 2.34 1.74 3.4-2.66.92-4.32 2.56-4.32 4.68 0 2.66 2.481 4.66 5.521 4.66 2.08 0 3.86-.84 5.26-2.4 1.64 1.74 2.72 2.4 4.2 2.4 2.14 0 3.94-1.68 4.06-4.52l-.22-.08c-.58.98-1.42 1.58-2.48 1.58-1.22 0-1.96-.5-3.24-1.92.908-1.29 1.987-2.36 2.987-3.103zm-8.129-7.578c1.08 0 1.761.88 1.761 2.2 0 .94-.376 1.923-1.16 3.1-1.413-1.284-2.34-2.2-2.34-3.44 0-1.12.74-1.86 1.74-1.86zm-.6 12.761c-1.82 0-3-1.3-3-2.84 0-.9.34-1.8 1.1-2.58 1.181 1.06 2.62 2.64 4.16 4.58-.74.58-1.439.84-2.26.84zm4.821-3.24c-.9-1.16-1.8-2.34-2.7-3.32 1.22-.601 2.005-1.143 2.518-1.695 1.055.485 1.89 1.93.182 5.015z"></path>
            </g>
          </svg>
        </div>
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
