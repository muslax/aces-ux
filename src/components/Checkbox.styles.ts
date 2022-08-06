import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, { grayed }: { grayed?: boolean }) => ({
  cbInner: {
    width: 18,
    height: 18,
  },

  cbInput: {
    width: 18,
    height: 18,
    ':disabled': {
      opacity: 1,
      backgroundColor: 'transparent',
      ':checked': {
        backgroundColor: theme.colors.gray[7],
      },
    },
  },

  icon: {
    // ':disabled': {
    //   color: theme.colors.red[8],
    // },
  },

  cbLabel: {
    color: grayed ? (grayed ? '' : '#89a') : '',
  },
}));
