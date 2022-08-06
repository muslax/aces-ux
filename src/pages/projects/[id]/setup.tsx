import { ReactElement, useContext, useState } from 'react';
import { Button, createStyles, Table, Text, Title } from '@mantine/core';
import { IconCheck, IconCircleCheck } from '@tabler/icons';
import useUser from 'lib/useUser';
import ProjectContext from 'components/ProjectProvider';
import Pojo from 'components/Pojo';
import { EditTolokUkur } from 'components/Project/TolokUkur/EditTolokUkur';
import { Setup, TableTolokUkur } from 'components/Project';
import UserLayout from 'components/Layout/UserLayout';

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
  if (!projectContext) return <></>;

  return <Setup context={projectContext} />;
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="project-layout" page="setup" title="Project Setup">
      {page}
    </UserLayout>
  );
};
