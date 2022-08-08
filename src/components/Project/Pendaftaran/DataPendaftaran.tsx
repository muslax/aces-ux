import { Button, Divider, Text } from '@mantine/core';
import SectionTitle from 'components/SectionTitle';
import { ProjectInfo } from 'lib/queries/getProject';
import Link from 'next/link';
import { useStyles } from './DataPendaftaran.styles';

export function DataPendaftaran({ context, data }: { context: ProjectInfo; data: any[] }) {
  return (
    <>
      <SectionTitle
        size={15}
        mb={20}
        title="Jenis Data dan Lampiran Pendaftaran"
        description="If you need multiple layouts, you can add a property getLayout to your page, allowing you to
        return a React component for the layout."
      />
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
      <Divider my={16} />
      <Link href={`/projects/${context.id}/edit-data-pendaftaran`} passHref>
        <Button component="a" size="xs" color="dark">
          Edit
        </Button>
      </Link>
    </>
  );
}

function FiledsGroup({ title, data }: { title: string; data: any[] }) {
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
