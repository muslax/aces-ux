import { ActionIcon, Collapse, createStyles } from '@mantine/core';
import { IconX } from '@tabler/icons';
import { FrameColor } from 'components/Frame/Frame.styles';
import { ReactNode, useState } from 'react';

type NoticeProps = StyleProps & {
  // color?: FrameColor;
  // mt?: number;
  // mb?: number;
  isOpen?: boolean;
  closeable?: boolean;
  children: ReactNode;
  onClose?: () => void;
};

export default function Notice(props: NoticeProps) {
  const { color, mt, mb, isOpen, closeable, onClose } = props;
  const { classes } = useStyles({ color, mt, mb });
  const [show, setShow] = useState(true);
  return (
    <>
      <Collapse in={isOpen || show}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.main}>{props.children}</div>
            {closeable && (
              <div className={classes.rightSection}>
                <ActionIcon
                  size={20}
                  className={classes.action}
                  onClick={() => {
                    setShow(false);
                    if (onClose) onClose();
                  }}
                >
                  <IconX className={classes.actionIcon} />
                </ActionIcon>
              </div>
            )}
          </div>
        </div>
      </Collapse>
    </>
  );
}

type StyleProps = {
  color?: FrameColor;
  mt?: number;
  mb?: number;
};

const useStyles = createStyles((theme, { color, mt, mb }: StyleProps, getRef) => {
  const baseColor = color ? theme.colors[color] : theme.colors.yellow;
  return {
    root: {
      position: 'relative',
      marginTop: mt || 0,
      marginBottom: mb || 10,
      ':hover': {
        [`& .${getRef('rightSection')}`]: {
          borderColor: baseColor[4],
        },
        [`& .${getRef('actionIcon')}`]: {
          color: theme.colors.dark[3],
        },
        [`& .${getRef('actionIcon')}:hover`]: {
          color: baseColor[6],
        },
      },
    },

    wrapper: {
      minHeight: 60,
      borderLeft: `4px solid ${baseColor[4]}`,
      backgroundColor: baseColor[0],
      display: 'flex',
      alignItems: 'stretch',
    },

    main: {
      flexGrow: 1,
      padding: 20,
    },

    rightSection: {
      ref: getRef('rightSection'),
      padding: '8px 8px',
      display: 'flex',
      alignItems: 'center',
      borderLeft: `1px dashed ${baseColor[2]}`,
      // backgroundColor: theme.colors.yellow[1],
    },

    action: {
      ':hover': {
        backgroundColor: 'transparent',
      },
    },

    actionIcon: {
      ref: getRef('actionIcon'),
      width: 16,
      height: 16,
      color: baseColor[3],
    },
  };
});
