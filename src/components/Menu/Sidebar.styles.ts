import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, { active }: { active?: boolean }) => ({
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
    color: active ? theme.colors.orange[6] : theme.colors.gray[8],
    fontWeight: active ? 500 : 400,
    textDecoration: 'none',
    ':hover': {
      borderRadius: 4,
      backgroundColor: theme.colors.gray[1],
    },
  },
}));
