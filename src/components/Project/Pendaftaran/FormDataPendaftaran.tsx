import { Dispatch, useEffect } from 'react';
import { Checkbox, CSSObject, ScrollArea, Table } from '@mantine/core';
// import { FieldProps, recruitmentFields } from 'lib/recruitmentFields';
import { useStyles } from './DataPendaftaran.styles';

type FormProps = {
  data: any[];
  selections: any[];
  setSelections: Dispatch<any[]>;
};

export function FormDataPendaftaran(props: FormProps) {
  const { classes } = useStyles({});
  const { data, selections, setSelections } = props;

  // useEffect(() => {
  //   const array: any[] = [];
  //   recruitmentFields.forEach((template) => {
  //     if (template.obligatory) array.push(template);
  //     else {
  //       const found = data.find((ud) => ud.id == template.id);
  //       const item: FieldProps = {
  //         id: template.id,
  //         type: template.type,
  //         label: template.label,
  //         included: found !== undefined,
  //         required: found?.required || false,
  //       };
  //       array.push(item);
  //     }
  //   });
  //   setSelections(array);
  //   return () => {};
  // }, []);

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
              <th className={classes.th} style={{ textAlign: 'right' }}>
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
