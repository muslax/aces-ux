import { createStyles } from '@mantine/core';

export type FrameColor =
  | 'gray'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'green'
  | 'teal'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'pink'
  | undefined;

interface FrameStyleProps {
  mt?: number;
  mb?: number;
  rounded?: boolean;
  shadow?: boolean;
  color?: string;
  borderColor?: FrameColor;
  titleColor?: FrameColor;
  altColor?: FrameColor;
  contrast?: number;
}

// Hex values of 1% - 100% of 256
const opacity = ['1A', '33', '4D', '66', '80', '9A', 'B3', 'CD', 'E6', 'FF'];

export const useStyles = createStyles((theme, props: FrameStyleProps) => {
  const borderColor = theme.colors[props.borderColor || 'gray'][7];
  const contrast = props.contrast === 0 ? 0 : props.contrast || 4;
  const border = `1px solid ${borderColor}${opacity[contrast]}`;
  const altColor: string = props.altColor ? `${theme.colors[props.altColor][1]}${opacity[3]}` : '';

  return {
    root: {
      marginTop: props.mt || 0,
      marginBottom: props.mb || 0,
      position: 'relative',
      borderRadius: props.rounded ? 7 : 0,
      boxShadow: props.shadow
        ? props.rounded
          ? `4px 4px 2px ${theme.colors.gray[2]}`
          : `4px 4px 0px ${theme.colors.gray[2]}`
        : 'none',
    },

    wrap: {
      zIndex: 1,
      height: '100%',
      overflow: 'hidden',
      borderRadius: props.rounded ? 4 : 0,
      backgroundColor: theme.white,
      border: border,
      // backgroundImage: theme.fn.linearGradient(
      //   133,
      //   theme.colors.pink[0],
      //   theme.colors.yellow[0],
      //   "white"
      // ),
    },

    headerWrap: {
      padding: '10px 15px',
      borderBottom: border,
      backgroundColor: altColor,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },

    title: {
      flexGrow: 1,
      fontSize: 16,
      color: props.titleColor ? theme.colors[props.titleColor][9] : theme.colors.gray,
      lineHeight: 1.5,
      fontWeight: 700,
    },

    actionIcon: {
      color: theme.colors.dark[4],
      width: 24,
      height: 24,
      minWidth: 24,
      minHeight: 24,
      marginRight: -4,
      ':hover': {
        color: theme.colors.indigo[6],
        backgroundColor: 'transparent',
      },
      ':disabled': {
        cursor: 'default',
        border: '0 none',
        background: 'transparent',
        color: theme.colors.gray[4],
        ':hover': {
          color: theme.colors.gray[4],
        },
      },
    },

    toggleButton: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.colors.dark[5],
      borderRadius: 0,
      backgroundColor: theme.colors.gray[2],
      ':hover': {
        backgroundColor: theme.colors.gray[3],
      },
    },

    description: {
      fontSize: 13,
      lineHeight: 1.36,
      marginTop: 2,
      // marginBottom: 2,
      marginRight: 30,
      color: theme.colors.gray[7],
      // background: theme.colors.yellow[4],
    },

    body: {
      padding: '15px',
      fontSize: 14,
      backgroundColor: props.color || theme.white,
    },

    footer: {
      padding: '10px 15px',
      borderTop: border,
    },
  };
});
