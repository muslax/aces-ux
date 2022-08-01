import { ReactNode } from 'react';
import { useStyles } from './Layout.styles';

export default function Container({ children }: { children: ReactNode }) {
  const { classes } = useStyles();
  return <div className={classes.container}>{children}</div>;
}
