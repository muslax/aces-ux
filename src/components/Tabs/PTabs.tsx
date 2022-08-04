import { TabProps, Tabs } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useState } from 'react';

export default function PTabs(props: TabProps) {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>(props.value);
  return (
    <Tabs variant="outline" value={activeTab} classNames={classes} onTabChange={setActiveTab}>
      {props.children}
    </Tabs>
  );
}

export const useStyles = createStyles((theme) => ({
  tabsList: {
    paddingLeft: 16,
    paddingRight: 16,
    // backgroundColor: theme.colors.pink[0],
    borderColor: theme.colors.gray[4],
  },
  tab: {
    ':hover': {
      // backgroundColor: theme.colors.gray[1],
    },
    '&[data-active]': {
      borderColor: theme.colors.gray[4],
      backgroundColor: theme.white,
    },
  },
  panel: {
    paddingTop: 20,
    paddingLeft: '0px !important',
  },
}));
