import { useState } from 'react';
import { Button, Divider, Space, Text } from '@mantine/core';
import { TanggalPendaftaran } from '../TanggalPendaftaran/TanggalPendaftaran';
import { DataPendaftaran } from './DataPendaftaran';
import { FormDataPendaftaran } from './FormDataPendaftaran';
import { FieldPendaftaran } from '../FieldPendaftaranRekrutment';

const sampleData: FieldPendaftaran[] = [
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

export function Settings() {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState<FieldPendaftaran[]>(sampleData);
  const [selections, setSelections] = useState<FieldPendaftaran[]>([]);

  const updateUserData = () => {
    const rs: FieldPendaftaran[] = [];
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
      <Text size="lg" weight={600} mb={10}>
        Jenis Data dan Lampiran Pendaftaran
      </Text>
      <Text size="sm" mb={20}>
        If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout.
      </Text>
      {editing && (
        <FormDataPendaftaran
          data={userData}
          selections={selections}
          setSelections={setSelections}
        />
      )}
      {!editing && <DataPendaftaran data={userData} />}
      <Divider my={16} />
      <Button
        size="xs"
        color="dark"
        onClick={() => {
          if (editing) {
            updateUserData();
          }
          setEditing(!editing);
        }}
      >
        {editing ? 'Save' : 'Edit'}
      </Button>
      {editing && (
        <Button
          size="xs"
          color="red"
          ml={20}
          variant="outline"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          Cancel
        </Button>
      )}
    </>
  );
}
