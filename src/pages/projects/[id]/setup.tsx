import { ReactElement, useContext, useState } from 'react';
import { Button, createStyles, Table, Text, Title } from '@mantine/core';
import { IconCheck, IconCircleCheck } from '@tabler/icons';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import ProjectLayout from 'components/Layout/ProjectLayout';
import Pojo from 'components/Pojo';
import TableTolokUkur from 'components/Project/TolokUkur/TableTolokUkur';
import { EditTolokUkur } from 'components/Project/TolokUkur/EditTolokUkur';

// type TolokUkur = {
//   label: string;
//   domain: string;
// };
const dataToloUkur = [
  { label: 'Berpikir Analitik', domain: 'Aspek Kognitif' },
  { label: 'Kreativitas', domain: 'Aspek Kognitif' },
  { label: 'Kerjasama', domain: 'Aspek Sosial' },
  { label: 'Networking', domain: 'Aspek Sosial' },
  { label: 'Kepemimpinan', domain: 'Aspek Sosial' },
  { label: 'Sistematika Kerja', domain: 'Pengelolaan Kerja' },
  { label: 'Ketelitian Kerja', domain: 'Pengelolaan Kerja' },
  { label: 'Kecepatan Kerja', domain: 'Pengelolaan Kerja' },
  { label: 'Adaptabilitas', domain: 'Pengelolaan Diri' },
  { label: 'Kontrol Diri', domain: 'Pengelolaan Diri' },
  { label: 'Persistensi', domain: 'Pengelolaan Diri' },
];

const useStyles = createStyles((theme) => ({
  td1: { width: 20, color: theme.colors.gray[6] },
  td2: { fontWeight: 500, whiteSpace: 'nowrap' },
  icon: { color: theme.colors.green[6] },
}));

export default function Project() {
  const { user } = useUser({ redirectTo: '/login' });
  const { projectContext } = useContext(ProjectContext);
  const [selected, setSelected] = useState(dataToloUkur);
  const [editing, setEditing] = useState(false);

  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;

  return (
    <>
      <Title order={4} mb={10}>
        Modul
      </Title>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 20, marginBottom: 10 }}>
        <Text mb={10} size="sm" style={{ flexGrow: 1 }}>
          Tolok Ukur dipakai dalam penyusunan laporan, kurang lebih sebagai berikut: If you need
          multiple layouts, you can add a property getLayout to your page...
        </Text>
      </div>

      <Table mb={30}>
        <thead>
          <tr>
            <th>Nama modul</th>
            <th>Waktu maksimal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GPQ</td>
            <td>60 menit</td>
          </tr>
          <tr>
            <td>AIME</td>
            <td>75 menit</td>
          </tr>
        </tbody>
      </Table>

      {editing && <EditTolokUkur data={selected} onSave={setSelected} setEditing={setEditing} />}

      {!editing && (
        <TableTolokUkur
          data={selected}
          title="Telak Ukur"
          description="Keterangan"
          setEditing={setEditing}
        />
      )}
    </>
  );
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout title="Project Setup">{page}</ProjectLayout>;
};
