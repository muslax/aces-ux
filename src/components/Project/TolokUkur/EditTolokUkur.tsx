import { Button, Checkbox, ScrollArea, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Pojo from 'components/Pojo';
import { Dispatch, useState } from 'react';
import { TolokUkurRekrutment } from './TolokUkur';
import { useStyles } from './TolokUkur.styles';

type EditTolokUkurProps = {
  data: { label: string; domain: string }[];
  onSave: Dispatch<any>;
  setEditing: Dispatch<boolean>;
};

export function EditTolokUkur(props: EditTolokUkurProps) {
  const { classes } = useStyles();
  const { width } = useViewportSize();
  const [selected, setSelected] = useState(props.data);
  return (
    <>
      <div
        style={{
          border: '1px solid #ccc',
          padding: 16,
        }}
      >
        <div
          style={{
            columnCount: width < 520 ? 1 : 2,
          }}
        >
          <Text weight={600} mb={10}>
            Daftar Tolok Ukur Rekrutmen
          </Text>
          {TolokUkurRekrutment.map((group, index) => (
            <div
              key={group.domain}
              style={{
                minWidth: 220,
                paddingBottom: 12,
                pageBreakInside: 'avoid',
                breakInside: 'avoid-column',
              }}
            >
              <Text weight={500} size="sm" mb={8}>
                {group.domain}
              </Text>
              {group.values.map((v) => (
                <div style={{ paddingLeft: 0, marginBottom: 8 }}>
                  <Checkbox
                    color="green"
                    size="sm"
                    label={v}
                    classNames={{
                      root: classes.cbRoot,
                      input: classes.cbInput,
                      label: classes.cbLabel,
                    }}
                    checked={selected.find((d) => d.label == v) != undefined}
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setSelected([...selected, { label: v, domain: group.domain }]);
                      } else {
                        setSelected(selected.filter((s) => s.label != v));
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 5 }}>
          <Button
            fullWidth
            size="xs"
            color="dark"
            variant="outline"
            onClick={() => {
              const rs: { label: string; domain: string }[] = [];
              TolokUkurRekrutment.forEach((t) => {
                t.values.forEach((v) => {
                  if (selected.find((x) => x.label == v)) {
                    rs.push({ label: v, domain: t.domain });
                  }
                });
              });
              props.onSave(rs);
              props.setEditing(false);
            }}
          >
            Save Tolok Ukur
          </Button>
        </div>
      </div>
    </>
  );
}
