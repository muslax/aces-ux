import { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Divider, Stack, Table, Text, Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';
import { useStyles } from 'components/Checkbox.styles';
import Pojo from 'components/Pojo';
import Link from 'next/link';
import { groupedNorms, Norm, randomNorms } from 'lib/norms';

export function EditNorms({ context }: { context: ProjectInfo }) {
  const { classes } = useStyles({});
  const norma = randomNorms(context.type);
  const groups = groupedNorms(context.type);

  const [selected, setSelected] = useState<string[]>([]);

  // useEffect(() => {
  //   if (groups) {
  //     const items: string[] = [];
  //     groups.forEach((group) => {
  //       group.map.forEach((v, k) => {
  //         if (v) items.push(k as string);
  //       });
  //     });
  //     setSelected(items);
  //   }
  //   return () => {};
  // }, []);

  // if (!groups) return <>'ERROR'</>;

  const rows = (norms: Norm[]) => {
    // const keys = Array.from(group.map.keys());
    return (
      <>
        {norms.map((norm: Norm) => (
          <tr key={norm.name}>
            <td>
              <div style={{ display: 'flex', alignItems: 'start' }}>
                <Checkbox
                  id={norm.name}
                  mt={2}
                  ml={4}
                  color="green"
                  classNames={{
                    inner: classes.cbInner,
                    input: classes.cbInput,
                    icon: classes.icon,
                  }}
                />
                <div style={{ flexGrow: 1, paddingLeft: 12, fontSize: 13.25, lineHeight: 1.6 }}>
                  <label
                    htmlFor={norm.name}
                    style={{
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    {norm.name}
                  </label>
                  {/* <Text size="sm">{module.description}</Text> */}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <Title order={2}>Edit Project Modules</Title>
      <Text>Judul Proyek: {context.title}</Text>
      <Text>Tipe Proyek: {context.type}</Text>
      {/* <Pojo object={JSON.stringify(selected)} /> */}
      <Divider mt={10} mb={20} />
      {/* <Pojo object={groups} /> */}
      <Stack spacing={24}>
        {groups.map((group) => (
          <div key={group.name}>
            <Text weight={600} size="md" mb={10}>
              {group.name}
            </Text>
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: 5,
                overflow: 'hidden',
                background: 'white',
              }}
            >
              <Table verticalSpacing="xs" highlightOnHover>
                <tbody>{rows(group.norms)}</tbody>
              </Table>
            </div>
          </div>
        ))}
      </Stack>
      <Box mt={20}>
        <Button color="dark" mr={15} px={32}>
          Save
        </Button>
        <Link href={`/projects/${context.id}/setup`} passHref>
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
