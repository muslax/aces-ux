import { ActionIcon, createStyles, Divider, Stack, Text, TextInput } from '@mantine/core';
import { IconLock, IconPencil } from '@tabler/icons';
import { useState } from 'react';

export default function FlatForm() {
  const [editing, setEditing] = useState(false);
  const { classes } = styles({ compact: false, editing: false });

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Text size="lg" weight={600}>
          <span>Project Info</span>
        </Text>
        <ActionIcon size={24} onClick={() => setEditing(!editing)}>
          <IconPencil size={18} />
        </ActionIcon>
      </div>
      <Divider mt={10} mb={8} />
      <Text size="sm" color="orange" mb={16}>
        If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout.
      </Text>
      <Stack spacing={8}>
        <TextInput
          label="Judul Proyek"
          defaultValue="Judul proyek is property getLayout"
          classNames={classes}
          rightSection={<IconLock size={16} />}
        />
        <TextInput
          label="Judul Proyek"
          defaultValue="Judul proyek is property getLayout"
          classNames={classes}
          disabled={!editing}
        />
        <TextInput
          label="Judul Proyek"
          defaultValue="Judul proyek is property getLayout"
          classNames={classes}
          disabled={!editing}
        />
        <TextInput
          label="Judul Proyek"
          defaultValue="Judul proyek is property getLayout"
          classNames={classes}
          disabled={!editing}
        />
      </Stack>
      <Divider my={16} />
    </>
  );
}

const styles = createStyles(
  (theme, { compact, editing }: { compact?: boolean; editing?: boolean }) => ({
    root: {
      display: compact ? 'block' : 'flex',
      alignItems: 'center',
      // backgroundColor: theme.colors.gray[0],
    },
    label: {
      fontSize: 13.5,
      fontWeight: 400,
      lineHeight: compact ? '20px' : '24px',
      flexBasis: 125,
    },
    wrapper: {
      flexGrow: 1,
    },
    input: {
      fontSize: 13.5,
      height: 36,
      minHeight: 36,
      lineHeight: 24,
      paddingLeft: 10,
      borderRadius: 0,
      borderColor: 'transparent',
      borderBottomColor: editing ? theme.colors.gray[4] : theme.colors.gray[3],
      backgroundColor: theme.colors.gray[1] + 'AA',
      ':hover': {
        borderBottomColor: editing ? theme.colors.indigo[3] : theme.colors.gray[5],
      },
      ':focus': {
        borderColor: 'transparent',
        borderBottomColor: theme.colors.indigo[4],
        backgroundColor: theme.colors.yellow[1] + '00',
      },
      ':disabled': {
        opacity: 1,
        cursor: 'initial',
        color: theme.colors.dark[6],
        backgroundColor: theme.colors.gray[1] + 'AA',
        ':hover': {
          borderBottomColor: theme.colors.gray[3],
        },
      },
    },
    rightSection: {
      color: theme.colors.gray[5],
    },
  })
);
