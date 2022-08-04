import { Button, ScrollArea, Table, Text, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { Dispatch } from 'react';
import { useStyles } from './TolokUkur.styles';

export type TipeTolokUkur = {
  label: string;
  domain: string;
};

type TableTolokUkurProps = {
  title: string;
  description?: string;
  disabled?: boolean;
  editable?: boolean;
  data: TipeTolokUkur[];
  setEditing: Dispatch<boolean>;
};

export function TableTolokUkur(props: TableTolokUkurProps) {
  const { classes } = useStyles();
  const rows = props.data.map((row, index) => {
    return (
      <tr key={`${row.label}`}>
        <td className={classes.td1}>{index + 1}</td>
        <td className={classes.td2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>{row.label}</span>
            <IconCheck size={16} className={classes.icon} />
          </div>
        </td>
        <td className={classes.td3}>{row.domain}</td>
      </tr>
    );
  });
  return (
    <>
      <Title order={4} mb={5}>
        {props.title}
      </Title>
      <Text mb={10} size="sm" className={classes.description}>
        Tolok Ukur dipakai dalam penyusunan laporan, kurang lebih sebagai berikut: If ...
      </Text>
      <ScrollArea>
        <Table className={classes.table} verticalSpacing="xs">
          <thead>
            <tr>
              <th className={classes.th}>#</th>
              <th className={classes.th}>Jenis Tolo Ukur</th>
              <th className={classes.th}>Aspek/Domain</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <div style={{ marginTop: 15 }}>
        <Button
          fullWidth
          size="xs"
          color="dark"
          variant="outline"
          onClick={() => props.setEditing(true)}
        >
          Edit Tolok Ukur
        </Button>
      </div>
    </>
  );
}
