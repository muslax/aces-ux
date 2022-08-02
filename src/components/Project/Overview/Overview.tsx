import { Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import FormFrame, { InputDef } from 'components/Frame/FormFrame';

export default function Overview() {
  const sampleForm = useForm({
    initialValues: {
      id: 'abcde',
      title: 'Pengamanatan Terpadu 2022',
      description: 'Deskripsi singkat',
      client: 'PT Aburaksa Halu Uleo',
      admin: 'sabram',
    },
  });
  const formSpec: InputDef[] = [
    { field: 'title', type: 'text', label: 'Judul Proyek', autofocus: true },
    { field: 'description', type: 'textarea', label: 'Deskripsi' },
    { field: 'client', type: 'text', label: 'Nama Klien' },
    { field: 'admin', type: 'text', label: 'Administrator', editable: false },
  ];

  return (
    <>
      <Text size="md">
        <strong>State-based content.</strong>
        {` `}
        If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout. This allows you to define the layout on a per-page
        basis. Since we're returning a function, we can have complex nested layouts if desired.
      </Text>
      <FormFrame
        mt={20}
        title="Project Info (fixed)"
        labelWidth={110}
        compactWidth={500}
        description="You can add a property getLayout to your page."
        form={sampleForm}
        inputDefs={formSpec}
      />
    </>
  );
}
