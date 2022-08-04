import { Checkbox, CheckboxProps, createStyles, CSSObject } from '@mantine/core';

export default function Chekbox(props: CheckboxProps) {
  const { classes } = useStyles();
  return (
    <Checkbox
      {...props}
      styles={{
        inner: classes.inner as unknown as CSSObject,
        input: classes.input as unknown as CSSObject,
      }}
    />
  );
}

const useStyles = createStyles((theme) => ({
  inner: {
    width: 18,
    height: 18,
  },

  input: {
    width: 18,
    height: 18,
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  label: {
    // color: item ? (item.included ? '' : '#89a') : '',
  },
}));
