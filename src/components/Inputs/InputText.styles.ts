import { createStyles } from '@mantine/core';

type CustomProps = {
  compact?: boolean;
  labelWidth?: number;
};
export const useStyles = createStyles((theme, { compact, labelWidth = 130 }: CustomProps) => ({
  root: {
    display: compact ? 'block' : 'flex',
    flexWrap: 'wrap',
    alignItems: 'start',
  },

  wrapper: {
    display: 'block',
    flexGrow: 1,
  },

  label: {
    display: compact ? 'flex' : 'block',
    flexBasis: labelWidth,
    flexShrink: 0,
    marginTop: compact ? 0 : 8,
    marginBottom: compact ? 2 : 0,
    color: theme.colors.dark[6],
    fontSize: 13.5,
    // textTransform: 'uppercase',
  },

  error: {
    width: '100%',
    marginLeft: compact ? 0 : labelWidth,
    fontSize: 12,
    marginTop: 3,
    color: theme.colors.orange[5],
  },

  invalid: {
    borderColor: theme.colors.orange[4],
  },

  input: {
    fontSize: 13.5,
    color: theme.colors.dark[6],
    borderRadius: 4,
    borderColor: theme.colors.gray[4],
    backgroundColor: theme.white,
    // borderLeftWidth: compact ? 2 : 1,
    ':focus': {
      borderRadius: 0,
      borderColor: theme.colors.indigo[3],
      // boxShadow: `2px 2px 0 ${theme.colors.gray[3]}`,
      // boxShadow: `#2222221A 0px 1.6px 3.6px 0px, #3333331A 0px 0.3px 0.9px 0px`,
      boxShadow: `${theme.colors.gray[2]} 2px 2px 3.6px 0px, ${theme.colors.gray[0]} 1px 1px 0.9px 0px`,
    },
    ':read-only': {
      backgroundColor: theme.colors.gray[0],
      ':focus': {
        borderRadius: 4,
        boxShadow: `none`,
        borderColor: theme.colors.gray[4],
      },
    },
    ':disabled': {
      opacity: 1,
      cursor: 'initial',
      color: `${theme.black} !important`,
      borderColor: theme.colors.gray[3],
      backgroundColor: theme.colors.gray[0],
      ':focus': {
        boxShadow: `none`,
      },
    },
  },
}));
