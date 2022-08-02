import { useEffect, useRef, useState } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { UseFormReturnType } from '@mantine/form';
import { ActionIcon, Button, Collapse, Stack, Textarea, TextInput } from '@mantine/core';
import { IconLock, IconLockOpen } from '@tabler/icons';
import { FrameColor, useStyles } from './Frame.styles';
import { useStyles as inputStyles } from 'components/Inputs/InputText.styles';
import { useStyles as textareaStyles } from 'components/Inputs/InputTextarea.styles';

export type InputDef = {
  field: string;
  type: 'text' | 'textarea';
  label: string;
  editable?: boolean;
  autofocus?: boolean;
};

type FormFrameProps = {
  form: UseFormReturnType<any>;
  inputDefs: InputDef[];
  labelWidth?: number;
  compactWidth?: number;
  disabled?: boolean;
  mt?: number;
  mb?: number;
  rounded?: boolean;
  shadow?: boolean;
  title?: string;
  description?: string;
  color?: string;
  altColor?: FrameColor;
  titleColor?: FrameColor;
  borderColor?: FrameColor;
  contrast?: number;
};

const autoCorrect = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  spellCheck: false,
};

export default function FormFrame(props: FormFrameProps) {
  const { width } = useViewportSize();
  const [copy, setCopy] = useState(false);
  const [editing, setEditing] = useState(false);
  const { classes } = useStyles({
    mt: props.mt,
    mb: props.mb,
    rounded: !editing, // props.rounded,
    shadow: editing, // props.shadow,
    color: props.color,
    borderColor: editing ? 'gray' : props.borderColor,
    contrast: editing ? 5 : 2, // props.contrast,
    altColor: editing ? 'gray' : undefined, // props.altColor,
    titleColor: props.titleColor,
  });
  const { classes: inputClassess } = inputStyles({
    labelWidth: props.labelWidth,
    compact: props.compactWidth ? width <= props.compactWidth : undefined,
  });
  const { classes: textareaClassess } = textareaStyles({
    labelWidth: props.labelWidth,
    compact: props.compactWidth ? width <= props.compactWidth : undefined,
  });

  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  function renderInput(def: InputDef, key: string) {
    if (def.type == 'text') {
      return (
        <TextInput
          key={key}
          label={def.label}
          ref={def.autofocus ? ref : undefined}
          disabled={!editing}
          classNames={inputClassess}
          orgdata={props.form.getInputProps(def.field)}
          {...props.form.getInputProps(def.field)}
          {...autoCorrect}
        />
      );
    } else if (def.type == 'textarea') {
      return (
        <Textarea
          key={key}
          // escapeEnter
          disabled={!editing}
          label={def.label}
          autosize
          classNames={textareaClassess}
          {...props.form.getInputProps(def.field)}
          {...autoCorrect}
          onKeyDown={(e) => {
            if (e.code == 'Enter') {
              e.preventDefault();
            }
          }}
        />
      );
    }
    return <>!! TYPE ERROR</>;
  }

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
    }
    return () => {};
  }, [editing]);

  useEffect(() => {
    const copy: any = {};
    Object.keys(props.form.values).forEach((k) => {
      copy[k] = props.form.values[k];
    });
    setCopy(copy);
    return () => {};
  }, []);

  function isDirty() {
    return JSON.stringify(props.form.values) !== JSON.stringify(copy);
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        {props.title && (
          <div className={classes.headerWrap}>
            <div className={classes.header}>
              <div className={classes.title}>{props.title}</div>
              {props.disabled && (
                <ActionIcon disabled className={classes.actionIcon}>
                  <IconLock size={18} />
                </ActionIcon>
              )}
              {!props.disabled && (
                <ActionIcon
                  className={classes.actionIcon}
                  onClick={() => {
                    if (editing) {
                      props.form?.reset();
                    }
                    setEditing(!editing);
                  }}
                >
                  {!editing && <IconLock size={18} />}
                  {editing && <IconLockOpen size={18} />}
                </ActionIcon>
              )}
            </div>
            {props.description && <div className={classes.description}>{props.description}</div>}
          </div>
        )}
        <div className={classes.body}>
          <Stack spacing={8}>
            {props.inputDefs.map((def) => (
              <>{renderInput(def, def.label)}</>
            ))}
          </Stack>
        </div>
        {props.form && (
          <Collapse in={editing}>
            <div className={classes.footer}>
              <Button color="dark" ml={props.labelWidth || 130} disabled={!isDirty()}>
                Save
              </Button>
            </div>
          </Collapse>
        )}
      </div>
    </div>
  );
}
