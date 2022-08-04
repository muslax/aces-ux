import { createStyles } from '@mantine/core';
import { FieldPendaftaran } from '../FieldPendaftaranRekrutment';

export const useStyles = createStyles((theme, { item }: { item?: FieldPendaftaran }, getRef) => ({
  table: {
    borderTop: `1px solid ${theme.colors.gray[4]}`,
    [`& thead th.${getRef('th')}`]: {
      color: theme.colors.gray[7],
      fontWeight: 800,
      borderBottom: `1px solid ${theme.colors.gray[5]}BB`,
    },
  },

  th: {
    ref: getRef('th'),
  },

  // Checkbox

  inner: {
    width: 18,
    height: 18,
  },

  input: {
    width: 18,
    height: 18,
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  label: {
    color: item ? (item.included ? '' : '#89a') : '',
  },

  fieldsGroup: {
    minWidth: 180,
    border: `1px solid ${theme.colors.gray[3]}`,
  },

  emptyGroup: { flexGrow: 1, paddingLeft: 15, color: theme.colors.gray[6] },

  fieldWrap: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    borderTop: `1px solid ${theme.colors.gray[3]}`,
    fontSize: 13.5,
  },

  fieldNum: {
    width: 40,
    paddingLeft: 15,
    color: theme.colors.gray[6],
  },

  fieldValue: {
    flexGrow: 1,
    paddingRight: 24,
  },

  ol: {
    paddingLeft: 30,
    fontSize: 13.5,
    borderTop: `1px solid red`,
  },
  li: {
    // textIndent: 16,
    lineHeight: 2,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    // '::marker': {
    //   color: 'red',
    //   width: 30,
    //   textAlign: 'left',
    // },
  },
}));
