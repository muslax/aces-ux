import { ReactNode, useState } from 'react';
import { ActionIcon, Button, Collapse } from '@mantine/core';
// import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { useStyles, FrameColor } from './Frame.styles';
import { UseFormReturnType } from '@mantine/form';
import { IconEdit, IconPencil, IconLock, IconLockOpen } from '@tabler/icons';

interface FrameProps {
  mt?: number;
  mb?: number;
  h?: number;
  w?: number;
  rounded?: boolean;
  shadow?: boolean;
  title?: string;
  description?: string;
  color?: string;
  altColor?: FrameColor;
  titleColor?: FrameColor;
  borderColor?: FrameColor;
  contrast?: number;
  form?: UseFormReturnType<any>;
  editable?: boolean;
  children: ReactNode;
}

export default function Frame(props: FrameProps) {
  const { classes } = useStyles({
    mt: props.mt,
    mb: props.mb,
    w: props.w,
    h: props.h,
    rounded: props.rounded,
    shadow: props.shadow,
    color: props.color,
    borderColor: props.borderColor,
    contrast: props.contrast,
    altColor: props.altColor,
    titleColor: props.titleColor,
  });
  const [editing, setEditing] = useState(false);
  const openHandler = () => {
    if (setEditing) setEditing(true);
  };
  const closeHandler = () => {
    if (setEditing) setEditing(false);
    props.form && props.form.reset();
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        {props.title && (
          <div className={classes.headerWrap}>
            <div className={classes.header}>
              <div className={classes.title}>{props.title}</div>
              {props.form && props.editable && !editing && (
                // <Button compact size="xs" className={classes.toggleButton} onClick={openHandler}>
                //   Edit
                // </Button>
                <ActionIcon
                  color="dark"
                  sx={{
                    // color: 'red',
                    width: 24,
                    height: 24,
                    minWidth: 24,
                    minHeight: 24,
                    ':hover': {
                      color: 'orange',
                      backgroundColor: 'white',
                    },
                  }}
                >
                  <IconLockOpen size={18} />
                </ActionIcon>
              )}
            </div>
            {props.description && <div className={classes.description}>{props.description}</div>}
          </div>
        )}
        <div className={classes.body}>{props.children}</div>
        {props.form && (
          <Collapse in={editing}>
            <div className={classes.footer} onClick={() => setEditing(!editing)}>
              Footer
            </div>
          </Collapse>
        )}
      </div>
    </div>
  );
}
