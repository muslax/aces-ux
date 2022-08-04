import { Button, Divider, Stack, Text, TextInput, useMantineTheme } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import Frame from 'components/Frame/Frame';

export function TanggalPendaftaran() {
  const theme = useMantineTheme();
  return (
    <>
      <Text size="lg" weight={600} mb={10}>
        Tanggal &amp; Waktu Pendaftaran
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
        <Frame rounded title="Alamat Pendaftaran" contrast={3} mt={10}>
          <Text size="sm" mb={20}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout.
          </Text>
          <TextInput
            label="https://gorekrut.id/"
            styles={{
              root: {
                position: 'relative',
                overflow: 'hidden',
              },
              label: {
                position: 'absolute',
                top: 2,
                left: 2,
                zIndex: 3,
                fontSize: 13.5,
                fontWeight: 600,
                letterSpacing: '.25px',
                lineHeight: '32px',
                paddingLeft: 10,
                paddingRight: 2,
                borderRadius: '2px 0 0 2px',
                backgroundColor: '#f0f0f0',
                backgroundImage: theme.fn.linearGradient(
                  133,
                  theme.colors.pink[0],
                  theme.colors.yellow[0],
                  'white'
                ),
              },
              input: {
                color: theme.colors.indigo[6],
                fontSize: 13.5,
                fontWeight: 600,
                paddingLeft: 143,
              },
            }}
          />
        </Frame>
      </Stack>
      <Divider my={16} />
      <Button size="xs" color="dark">
        Save
      </Button>
    </>
  );
}
