import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  radio: {
    width: 16,
    height: 16,
    ':checked': {
      borderColor: theme.colors.green[6],
      backgroundColor: theme.colors.green[6],
    },
    ':disabled': {
      opacity: 1,
      backgroundColor: 'transparent',
    },
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    top: 4,
    left: 4,
    width: 8,
    height: 8,
  },
  label: {
    paddingLeft: 6,
  },
}));
