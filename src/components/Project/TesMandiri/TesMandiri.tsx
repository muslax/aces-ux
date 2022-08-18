import { Tabs, Title } from '@mantine/core';
import PTabs from 'components/Tabs/PTabs';
import { ProjectInfo } from 'lib/queries/getProject';
import { useState } from 'react';
import Email from './Email';
import Monitoring from './Monitoring';
import { Person, randomFeed } from './random-feed';
import Screening from './Screening';
import ScreeningDefault from './ScreeningDefault';
import { Tanggal } from './Tanggal';

const size = process.env.NODE_ENV === 'production' ? 1000 : 150;

export function TesMandiri({ context }: { context: ProjectInfo }) {
  const [daftarPeserta, setDaftarPeserta] = useState<Person[]>(randomFeed(size));
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
      <Tabs.Panel value="Email">
        <Email context={context} daftarPeserta={daftarPeserta} />
      </Tabs.Panel>
      <Tabs.Panel value="Monitoring">
        <Monitoring context={context} daftarPeserta={daftarPeserta} />
      </Tabs.Panel>
      <Tabs.Panel value="Screening">
        <ScreeningDefault daftarPeserta={daftarPeserta} />
      </Tabs.Panel>
    </PTabs>
  );
}
