import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  root: {
    height: 70,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    '@media (min-width: 768px)': {
      position: 'fixed',
      zIndex: 99,
      top: 0,
      left: 0,
      right: 0,
      borderBottomColor: 'transparent',
    },
  },

  rootScrolled: {
    '@media (min-width: 768px)': {
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
      boxShadow: '0 0 3px rgba(100,100,100,.15)',
    },
  },
}));
