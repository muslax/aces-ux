import { Text } from '@mantine/core';
import { FieldPendaftaran } from '../FieldPendaftaranRekrutment';
import { useStyles } from './DataPendaftaran.styles';

export function DataPendaftaran({ data }: { data: FieldPendaftaran[] }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'start',
          gap: 20,
        }}
      >
        <FiledsGroup title="Data wajib isi" data={data.filter((d) => d.obligatory || d.required)} />
        <FiledsGroup
          title="Data opsional"
          data={data.filter((d) => d.type == 'input' && !d.obligatory && !d.required)}
        />
        <FiledsGroup title="Attachment" data={data.filter((d) => d.type == 'attachment')} />
      </div>
    </>
  );
}

function FiledsGroup({ title, data }: { title: string; data: FieldPendaftaran[] }) {
  const { classes } = useStyles({});

  return (
    <div className={classes.fieldsGroup}>
      <Text weight={500} px={15} py={10} size="sm" style={{ backgroundColor: '#f2f6fa' }}>
        {title}
      </Text>
      {data.length == 0 && (
        <div className={classes.fieldWrap}>
          <div className={classes.emptyGroup}>- Tidak ada</div>
        </div>
      )}
      {data.map((d, i) => (
        <div key={d.id} className={classes.fieldWrap}>
          <div className={classes.fieldNum}>{i + 1}</div>
          <div className={classes.fieldValue}>{d.label}</div>
        </div>
      ))}
    </div>
  );
}
