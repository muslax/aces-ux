import { Tabs } from '@mantine/core';
import ProjectContext from 'components/ProjectProvider';
import PTabs from 'components/Tabs/PTabs';
import { randomNames } from 'lib/names/names';
import { useContext } from 'react';
import { Monitoring } from './Monitoring';
import { Screening } from './Screening';
import { Settings } from './Settings';

export function Pendaftaran() {
  const { projectContext } = useContext(ProjectContext);
  const names = randomNames(200);

  return (
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
        <Monitoring names={names} />
      </Tabs.Panel>
      <Tabs.Panel value="Screening">
        <Screening names={names} />
      </Tabs.Panel>
    </PTabs>
  );
}
