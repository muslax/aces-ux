import { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Divider, Stack, Table, Text, Title } from '@mantine/core';
import { ProjectInfo } from 'lib/queries/getProject';
import { getModules, getProduct, Module, ModulesGroup, ProductType } from 'lib/modules';
import { useStyles } from 'components/Checkbox.styles';
import Pojo from 'components/Pojo';
import Link from 'next/link';

export function EditModules({ context }: { context: ProjectInfo }) {
  const { classes } = useStyles({});
  const groups = getProduct(context.type as ProductType)?.groups;

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (groups) {
      const items: string[] = [];
      groups.forEach((group) => {
        group.map.forEach((v, k) => {
          if (v) items.push(k as string);
        });
      });
      setSelected(items);
    }
    return () => {};
  }, []);

  if (!groups) return <>'ERROR'</>;

  const rows = (group: ModulesGroup) => {
    const keys = Array.from(group.map.keys());
    return (
      <>
        {getModules(keys).map((module: Module) => (
          <tr key={module.type}>
            <td>
              <div style={{ display: 'flex', alignItems: 'start' }}>
                <Checkbox
                  id={module.type}
                  mt={2}
                  ml={4}
                  color={group.map.get(module.type) ? 'dark' : 'green'}
                  disabled={
                    selected.includes(module.conflictWith as string) || group.map.get(module.type)
                  }
                  classNames={{
                    inner: classes.cbInner,
                    input: classes.cbInput,
                    icon: classes.icon,
                  }}
                  checked={selected.includes(module.type) || group.map.get(module.type)}
                  onChange={(e) => {
                    if (e.currentTarget.checked) {
                      setSelected([...selected, module.type]);
                    } else {
                      const items = selected.filter((v) => v !== module.type);
                      setSelected(items);
                    }
                  }}
                />
                <div style={{ flexGrow: 1, paddingLeft: 12, fontSize: 14, lineHeight: 1.36 }}>
                  <label
                    htmlFor={module.type}
                    style={{
                      fontWeight: 500,
                      cursor: selected.includes(module.conflictWith as string) ? '' : 'pointer',
                      color: selected.includes(module.conflictWith as string) ? '#a0a3a6' : '',
                    }}
                  >
                    {module.name}
                  </label>
                  <Text size="sm">{module.description}</Text>
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
      <Stack spacing={24}>
        {groups.map((group) => (
          <div key={group.title}>
            <Text weight={600} size="md">
              {group.title}
            </Text>
            <Text weight={400} size="sm" mb={10}>
              {group.description}
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
                <tbody>{rows(group)}</tbody>
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
