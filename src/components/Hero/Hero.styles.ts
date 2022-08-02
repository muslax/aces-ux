import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, { color }: { color?: string }) => ({
  root: {
    backgroundColor: color || theme.colors.gray[1],
    '@media (min-width: 768px)': {
      // padding: "28px 24px",
    },
  },

  heroWrap: {
    '@media (min-width: 768px)': {
      marginTop: 70,
    },
  },

  heroScrolled: {
    '@media (max-width: 767px)': {
      marginTop: 50,
    },
  },

  bgContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    marginRight: -16,
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      paddingLeft: 24,
      paddingRight: 24,
      marginLeft: -24,
      marginRight: -24,
    },
  },

  bgWrap: {
    margin: '0 -100px',
    padding: '0 100px',
    backgroundImage: 'url("/ccchaos.svg")',
    backgroundSize: 600,
    backgroundPositionX: '90%',
    backgroundPositionY: '70%',
    backgroundRepeat: 'no-repeat',
  },

  wrap: {
    margin: '0 auto',
    padding: '24px 0',
    '@media (min-width: 768px)': {
      maxWidth: 900,
      padding: '28px 0',
    },
  },

  hero: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    // maxWidth: 884,
    marginLeft: 'auto',
    marginRight: 0,
    '@media (min-width: 768px)': {
      gap: 20,
      // padding: "0 16px",
    },
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    gap: 15,
    '@media (min-width: 768px)': {
      gap: 20,
    },
  },

  right: {
    //
  },

  iconBox: {
    width: 54,
    height: 54,
    border: `1px solid ${theme.colors.gray[4]}`,
    backgroundColor: 'white',
    borderRadius: 5,
    '@media (min-width: 768px)': {
      width: 64,
      height: 64,
      borderRadius: 7,
    },
  },

  label: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: 'uppercase',
    '@media (min-width: 768px)': {
      fontSize: 12,
    },
  },

  title: {
    fontSize: 30,
    lineHeight: 0.8,
    fontWeight: 800,
    letterSpacing: -1,
    paddingBottom: 5,
    '@media (min-width: 768px)': {
      fontSize: 36,
    },
  },
}));
