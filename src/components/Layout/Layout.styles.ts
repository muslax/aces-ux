import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  fullWidth: {},

  container: {
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 768px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  pageWrap: {
    position: 'relative',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  pageFlex: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 80,
  },

  aside: {
    display: 'none',
    '@media (min-width: 768px)': {
      position: 'sticky',
      top: 100,
      display: 'block',
      width: '23.5%',
      minWidth: 175,
      maxWidth: 200,
      paddingRight: 45,
      // backgroundColor: theme.colors.pink[4],
    },
  },

  main: {
    flexGrow: 1,
    maxWidth: 620,
    paddingBottom: 100,
    minHeight: 'calc(100vh - 230px)',
    '@media (min-width: 768px)': {
      width: '76.5%',
      maxWidth: 720,
    },
  },

  //

  header: {
    height: 70,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },

  headerFixed: {
    '@media (min-width: 768px)': {
      position: 'fixed',
      zIndex: 99,
      top: 0,
      left: 0,
      right: 0,
      borderBottomColor: 'transparent',
    },
  },

  headerScrolled: {
    '@media (min-width: 768px)': {
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
      boxShadow: '0 0 3px rgba(100,100,100,.15)',
    },
  },

  headerwrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
}));
