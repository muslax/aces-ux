import { Button, Divider, Stack, Text, TextInput, useMantineTheme } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import Frame from 'components/Frame/Frame';

export function Tanggal() {
  const theme = useMantineTheme();
  return (
    <>
      <Text size="lg" weight={600} mb={10}>
        Tanggal &amp; Waktu Tes
      </Text>
      <Text size="sm" mb={20}>
        If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout.
      </Text>
      {/* <Divider my={16} /> */}
      <Stack spacing={10}>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 180 }}>
            <DatePicker label="Tanggal Mulai" />
          </div>
          <TimeInput label="Jam Mulai" />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 180 }}>
            <DatePicker label="Tanggal Selesai" />
          </div>
          <TimeInput label="Jam Selesai" />
        </div>
      </Stack>
      <Divider my={16} />
      <Button size="xs" color="dark">
        Save
      </Button>
    </>
  );
}
