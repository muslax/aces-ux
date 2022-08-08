import { Tabs } from '@mantine/core';
import PTabs from 'components/Tabs/PTabs';
import { ProjectInfo } from 'lib/queries/getProject';
import { Tanggal } from './Tanggal';

export function TesInteraktif({ context }: { context: ProjectInfo }) {
  return (
    <PTabs value="Settings">
      <Tabs.List>
        <Tabs.Tab value="Settings">Settings</Tabs.Tab>
        <Tabs.Tab value="Monitoring">Monitoring</Tabs.Tab>
        <Tabs.Tab value="Screening">Screening</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="Settings">
        <Tanggal />
      </Tabs.Panel>
      <Tabs.Panel value="Monitoring">Monitoring</Tabs.Panel>
      <Tabs.Panel value="Screening">Screening</Tabs.Panel>
    </PTabs>
  );
}
