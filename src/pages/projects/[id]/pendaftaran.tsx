import { ReactElement, useContext } from 'react';
import { Tabs } from '@mantine/core';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import ProjectLayout from 'components/Layout/ProjectLayout';
import PTabs from 'components/Tabs/PTabs';
import { Settings } from 'components/Project/Pendaftaran/Settings';

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);

  // =====================================================================
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  // =====================================================================
  return (
    <>
      <PTabs value="Settings">
        <Tabs.List>
          <Tabs.Tab value="Settings">Settings</Tabs.Tab>
          <Tabs.Tab value="Monitoring">Monitoring</Tabs.Tab>
          <Tabs.Tab value="Screening">Screening</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Settings">
          <Settings />
        </Tabs.Panel>
        <Tabs.Panel value="Monitoring">
          <div>Monitoring content</div>
        </Tabs.Panel>
        <Tabs.Panel value="Screening">
          <div>Screening content</div>
        </Tabs.Panel>
      </PTabs>
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout title="Pendaftaran">{page}</ProjectLayout>;
};
