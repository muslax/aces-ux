import { Tabs } from '@mantine/core';
import PTabs from 'components/Tabs/PTabs';
import { randomNames } from 'lib/names/names';
import { ProjectInfo } from 'lib/queries/getProject';
import { Monitoring } from './Monitoring';
import { Screening } from './Screening';
import { Settings } from './Settings';

export function Pendaftaran({ context }: { context: ProjectInfo }) {
  const names = randomNames(200);

  return (
    <PTabs value="Settings">
      <Tabs.List>
        <Tabs.Tab value="Settings">Settings</Tabs.Tab>
        <Tabs.Tab value="Monitoring">Monitoring</Tabs.Tab>
        <Tabs.Tab value="Screening">Screening</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="Settings">
        <Settings context={context} />
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
