import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, { active }: { active?: boolean }, getRef) => ({
  wrap: {
    margin: 0,
    padding: '0px 0 0',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },

  itemWrap: {
    padding: 0,
    margin: 0,
  },

  item: {
    fontSize: 13.5,
    margin: '0 -10px 0 -8px',
    padding: '3px 10px 3px 8px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    color: theme.colors.gray[8],
    fontWeight: 400,
    textDecoration: 'none',
    ':hover': {
      borderRadius: 4,
      [`& .${getRef('label')}`]: {
        color: active ? theme.colors.indigo[6] : '',
        textDecoration: active ? 'none' : 'underline',
      },
      [`& .${getRef('icon')}`]: {
        color: active ? theme.colors.indigo[6] : theme.colors.pink[5],
      },
    },
  },

  label: {
    ref: getRef('label'),
    color: active ? theme.colors.indigo[7] : '',
    textUnderlineOffset: 3,
    textDecorationThickness: 2,
  },

  icon: {
    display: 'flex',
    ref: getRef('icon'),
    color: active ? theme.colors.indigo[6] : theme.colors.gray[5],
  },
}));
