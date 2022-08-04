import { TextInput, TextInputProps } from '@mantine/core';
import React, { useRef } from 'react';
import { useStyles } from './InputText.styles';

interface InputTextProps extends TextInputProps {
  compact?: boolean;
  labelWidth?: number;
}
const InputText = (props: InputTextProps) => {
  const { classes } = useStyles({ compact: props.compact, labelWidth: props.labelWidth });
  const values = { ...props };
  // Delete non standard props
  delete values.compact;
  delete values.labelWidth;
  const ref = useRef<HTMLInputElement>(null);
  return (
    <TextInput
      {...values}
      ref={ref}
      classNames={classes}
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
    />
  );
};

export default InputText;
// export declare const FInputText: React.ForwardedRef<
//   InputTextProps & React.RefAttributes<HTMLInputElement>
// >;
// export const FInputText;

// export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
