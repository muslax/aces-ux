import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, getRef) => ({
  nav: {
    height: 50,
    padding: '0 16px',
    backgroundColor: theme.white,
    borderBottom: '1px solid transparent',
    '@media (min-width: 768px)': {
      display: 'none',
      // position: 'fixed',
      // top: -200,
    },
  },

  navFixed: {
    position: 'fixed',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
  },

  navScrolled: {
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    boxShadow: '0 0 3px rgba(100,100,100,.15)',
  },

  wrap: {
    height: 50,
    marginLeft: -12,
    // overflow: 'hidden',
    display: 'flex',
    alignItems: 'start',
    // justifyContent: 'space-between',
    position: 'relative',
  },

  flex: {
    display: 'flex',
    height: 50,
    flexWrap: 'wrap',
    flexGrow: 1,
    alignItems: 'start',
    overflow: 'hidden',
  },

  item: {
    display: 'block',
    position: 'relative',
    padding: '0 12px',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '50px',
    color: theme.colors.gray[8],
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      color: theme.colors.violet[5],
    },

    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 0,
      left: 12,
      right: 12,
      bottom: 0,
    },
  },

  active: {
    color: theme.colors.gray[8],
    ':before': {
      borderBottom: '3px solid #345',
    },
    ':hover': {
      color: theme.colors.gray[8],
    },
  },

  hidden: { display: 'none' },

  menuwrap: {
    width: 36,
    flexShrink: 0,
    // display: 'flex',
    // alignItems: 'center',
  },
}));
