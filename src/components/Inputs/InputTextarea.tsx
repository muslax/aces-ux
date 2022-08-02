import { Textarea, TextareaProps } from '@mantine/core';
import { useStyles } from './InputTextarea.styles';

interface InputTextareaProps extends TextareaProps {
  compact?: boolean;
  labelWidth?: number;
  escapeEnter?: boolean;
}
export default function InputTextarea(props: InputTextareaProps) {
  const { compact, labelWidth, escapeEnter } = props;
  const { classes } = useStyles({ compact, labelWidth });
  const values = { ...props };
  // Delete non standard props
  delete values.compact;
  delete values.labelWidth;
  delete values.escapeEnter;
  return (
    <Textarea
      {...values}
      classNames={classes}
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      autosize
      onKeyDown={(e) => {
        if (escapeEnter && e.code == 'Enter') {
          e.preventDefault();
        }
      }}
    />
  );
}
