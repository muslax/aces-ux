import { Text, Title } from '@mantine/core';
import { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  description?: string;
  mt?: number;
  mb?: number;
  rightSection?: ReactNode;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div style={{ marginTop: props.mt || 0, marginBottom: props.mb || 0 }}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }}>
          <Title order={4}>{props.title}</Title>
          {props.description && <Text>{props.description}</Text>}
        </div>
        <div>{props.rightSection && props.rightSection}</div>
      </div>
    </div>
  );
}
