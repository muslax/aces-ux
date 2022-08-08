import {
  Box,
  Button,
  Checkbox,
  CSSObject,
  Divider,
  ScrollArea,
  Table,
  Text,
  Title,
} from '@mantine/core';
import Pojo from 'components/Pojo';
import { ProjectInfo } from 'lib/queries/getProject';
import { RecruitmentField, recruitmentFields } from 'lib/recruitmentFields';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStyles } from './EditDataPendaftaran.styles';

export function EditDataPendaftaran({ context }: { context: ProjectInfo }) {
  const { classes } = useStyles({});
  const [userData, setUserData] = useState<any[]>([]);
  const [selections, setSelections] = useState<any[]>([]);

  useEffect(() => {
    const array: any[] = [];
    recruitmentFields.forEach((template) => {
      if (template.obligatory) array.push(template);
      else {
        const found = userData.find((ud) => ud.id == template.id);
        const item: RecruitmentField = {
          id: template.id,
          type: template.type,
          label: template.label,
          included: found !== undefined,
          required: found?.required || false,
        };
        array.push(item);
      }
    });
    setSelections(array);
    return () => {};
  }, []);

  function describe(item: any) {
    if (!item.included) {
      return <span style={{ color: '#89a' }}>Tidak dimuat</span>;
    }
    return item.required ? <label>Harus diisi</label> : <label>Tidak harus diisi</label>;
  }

  const rows = selections.map((item, i) => {
    return (
      <tr key={item.id}>
        <td>{i + 1}</td>
        <td>
          {item.obligatory && (
            <Checkbox
              label={item.label}
              color="dark"
              checked
              readOnly
              styles={{
                inner: classes.inner as unknown as CSSObject,
                input: classes.input as unknown as CSSObject,
              }}
            />
          )}
          {!item.obligatory && (
            <Checkbox
              label={item.label}
              color="green"
              checked={item.included}
              styles={{
                inner: classes.inner as unknown as CSSObject,
                input: classes.input as unknown as CSSObject,
              }}
              onChange={(event) => {
                const items = [...selections];
                items[i] = { ...item, included: event.currentTarget.checked };
                if (!event.currentTarget.checked) {
                  items[i].required = false;
                }
                setSelections(items);
              }}
            />
          )}
        </td>
        {item.obligatory && (
          <>
            <td>
              <Checkbox
                color="dark"
                label="Required"
                checked
                readOnly
                styles={{
                  inner: classes.inner as unknown as CSSObject,
                  input: classes.input as unknown as CSSObject,
                }}
              />
            </td>
            <td style={{ textAlign: 'right' }}>Harus diisi</td>
          </>
        )}
        {!item.obligatory && !item.included && (
          <td colSpan={2} style={{ textAlign: 'left' }}>
            {describe(item)}
          </td>
        )}
        {!item.obligatory && item.included && (
          <>
            <td>
              <Checkbox
                label="Required"
                color="green"
                checked={item.required}
                readOnly={!item.included}
                disabled={!item.included}
                styles={{
                  inner: classes.inner as unknown as CSSObject,
                  input: classes.input as unknown as CSSObject,
                  label: {
                    color: item.included ? '' : '#89a',
                  },
                }}
                onChange={(event) => {
                  if (!item.included) return false;
                  const items = [...selections];
                  items[i] = { ...item, required: event.currentTarget.checked };
                  setSelections(items);
                }}
              />
            </td>
            <td style={{ textAlign: 'right' }}>{describe(item)}</td>
          </>
        )}
      </tr>
    );
  });

  return (
    <>
      <Title order={2}>Edit Project Modules</Title>
      <Text>Judul Proyek: {context.title}</Text>
      <Text mb={20}>Tipe Proyek: {context.type}</Text>
      {/* <Pojo object={JSON.stringify(selected)} /> */}
      {/* <Divider mt={10} mb={20} /> */}
      {/* <Pojo object={recruitmentFields} /> */}
      <ScrollArea>
        <Table className={classes.table} verticalSpacing="xs">
          <thead>
            <tr>
              <th className={classes.th} style={{ width: 20 }}>
                #
              </th>
              <th className={classes.th}>Nama Kolom</th>
              <th className={classes.th} style={{ width: 100 }}>
                Option
              </th>
              <th className={classes.th} style={{ textAlign: 'right', width: 130 }}>
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Box mt={20}>
        <Button color="dark" mr={15} px={32}>
          Save
        </Button>
        <Link href={`/projects/${context.id}/pendaftaran`} passHref>
          <Button
            component="a"
            variant="outline"
            color="gray"
            sx={{
              ':hover': {
                color: 'red',
                borderColor: 'red',
                backgroundColor: 'white',
              },
            }}
          >
            Cancel
          </Button>
        </Link>
      </Box>
    </>
  );
}
