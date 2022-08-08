import { useState } from 'react';
import { Space } from '@mantine/core';
import { TanggalPendaftaran } from './TanggalPendaftaran';
import { DataPendaftaran } from './DataPendaftaran';
import { ProjectInfo } from 'lib/queries/getProject';

const sampleData: any[] = [
  { id: 'FDR01', type: 'input', label: 'Email', obligatory: true },
  { id: 'FDR02', type: 'input', label: 'Nama Lengkap', obligatory: true },
  { id: 'FDR03', type: 'input', label: 'Jenis Kelamin', required: true },
  { id: 'FDR04', type: 'input', label: 'Tempat Lahir', required: false },
  { id: 'FDR05', type: 'input', label: 'Tanggal Lahir', required: true },
  { id: 'FDR06', type: 'input', label: 'Telepon/HP', required: true },
  { id: 'FDR07', type: 'input', label: 'Agama' },
  { id: 'FDR08', type: 'input', label: 'Suku Bangsa' },
  { id: 'FDR09', type: 'input', label: 'Kewarganegaraan', required: true },
];

export function Settings({ context }: { context: ProjectInfo }) {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState<any[]>(sampleData);
  const [selections, setSelections] = useState<any[]>([]);

  const updateUserData = () => {
    const rs: any[] = [];
    selections
      .filter((sel) => sel.obligatory)
      .forEach((sel) => {
        rs.push({ id: sel.id, type: sel.type, label: sel.label, obligatory: true });
      });
    selections
      .filter((sel) => sel.included)
      .forEach((sel) => {
        rs.push({ id: sel.id, type: sel.type, label: sel.label, required: sel.required });
      });
    setUserData(rs);
  };

  return (
    <>
      <TanggalPendaftaran />
      <Space h={30} />
      <DataPendaftaran context={context} data={userData} />
    </>
  );
}
