import { Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import FormFrame, { InputDef } from 'components/Frame/FormFrame';
import Notice from 'components/Notice/Notice';
import { ProjectInfo } from 'lib/queries/getProject';
import { useState } from 'react';

export function Overview({ context }: { context: ProjectInfo }) {
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

  const [editing, setEditing] = useState(false);

  // const { classes } = useStyles({});
  return (
    <>
      <Notice mb={0} color="pink" closeable>
        <Text size="md">
          <strong>State-based disposeable Notice.</strong>
          {` `}
          If you need multiple layouts, you can add a property getLayout to your page, allowing you
          to return a React component for the layout. This allows you to define the layout on a
          per-page basis. Since we're returning a function, we can have complex nested layouts if
          desired.
        </Text>
      </Notice>
      {/* <Notice mb={0} color="green" closeable>
        <Text size="md">
          <strong>State-based Notice.</strong>
          {` `}
          If you need multiple layouts, you can add a property getLayout to your page, allowing you
          to return a React component for the layout. This allows you to define the layout on a
          per-page basis. Since we're returning a function, we can have complex nested layouts if
          desired.
        </Text>
      </Notice>
      <Notice closeable color="indigo">
        <Text size="md">
          <strong>State-based disposeable Notice.</strong>
          {` `}
          If you need multiple layouts, you can add a property getLayout to your page, allowing you
          to return a React component for the layout. This allows you to define the layout on a
          per-page basis. Since we're returning a function, we can have complex nested layouts if
          desired.
        </Text>
      </Notice>
      <Text size="md">
        <strong>State-based content.</strong>
        {` `}
        If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout. This allows you to define the layout on a per-page
        basis. Since we're returning a function, we can have complex nested layouts if desired.
      </Text> */}
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
