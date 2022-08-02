import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, {}, getRef) => ({
  description: {
    color: theme.colors.indigo[6],
  },
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
  td1: { width: 20, color: theme.colors.gray[6] },
  td2: { fontWeight: 500, whiteSpace: 'nowrap' },
  td3: { color: theme.colors.gray[7], whiteSpace: 'nowrap' },
  icon: { color: theme.colors.green[6] },

  cbRoot: {
    ':hover': {
      color: theme.colors.green[6],
      // [`& ${getRef('cbLabel')}`]: {
      //   color: theme.colors.green[6],
      // },
    },
    [`:hover & ${getRef('cbLabel')}`]: {
      color: theme.colors.green[6],
    },
  },

  cbInput: {
    cursor: 'pointer',
  },

  cbLabel: {
    ref: getRef('cbLabel'),
    fontSize: 13.5,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    ':hover': {
      color: theme.colors.gray[7],
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      textDecorationThickness: 1,
    },
  },
}));
