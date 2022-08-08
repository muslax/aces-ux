import { Tabs, Title } from '@mantine/core';
import PTabs from 'components/Tabs/PTabs';
import { ProjectInfo } from 'lib/queries/getProject';
import Monitoring from './Monitoring';
import Screening from './Screening';
import { Tanggal } from './Tanggal';

export function TesMandiri({ context }: { context: ProjectInfo }) {
  return (
    <PTabs value="Settings">
      <Tabs.List>
        <Tabs.Tab value="Settings">Settings</Tabs.Tab>
        <Tabs.Tab value="Email">Email</Tabs.Tab>
        <Tabs.Tab value="Monitoring">Monitoring</Tabs.Tab>
        <Tabs.Tab value="Screening">Screening</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="Settings">
        <Tanggal />
      </Tabs.Panel>
      <Tabs.Panel value="Email">Email</Tabs.Panel>
      <Tabs.Panel value="Monitoring">
        <Monitoring context={context} />
      </Tabs.Panel>
      <Tabs.Panel value="Screening">
        <Screening context={context} />
      </Tabs.Panel>
    </PTabs>
  );
}
