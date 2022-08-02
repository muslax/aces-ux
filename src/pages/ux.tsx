import { Tabs, Text, TextInput, Title, useMantineTheme } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import { ReactElement, useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';
import Frame from 'components/Frame/Frame';
import PTabs from 'components/Tabs/PTabs';

export default function UX() {
  const [level, setLevel] = useState(4);
  const theme = useMantineTheme();

  return (
    <>
      <Title order={2} mb={40}>
        User interface
      </Title>

      <PTabs value="messages">
        <Tabs.List>
          <Tabs.Tab value="typography" icon={<IconPhoto size={14} />}>
            Typography
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="typography" pl="xs">
          <Text weight={800}>XS</Text>
          <Text size="xs" mb={16}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout. This allows you to define the layout on
            a per-page basis. Since we're returning a function, we can have complex nested layouts
            if desired.
          </Text>
          <Text weight={800}>SM</Text>
          <Text size="sm" mb={16}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout. This allows you to define the layout on
            a per-page basis. Since we're returning a function, we can have complex nested layouts
            if desired.
          </Text>
          <Text weight={800}>MD</Text>
          <Text size="md" mb={16}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout. This allows you to define the layout on
            a per-page basis. Since we're returning a function, we can have complex nested layouts
            if desired.
          </Text>
          <TextInput
            label="Input label"
            radius={3}
            styles={{ input: { fontSize: 14.15 } }}
            defaultValue="If you need multiple layouts, you can add a property getLayout to your page"
          />
          <Text weight={800}>LG</Text>
          <Text size="lg" mb={16}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout. This allows you to define the layout on
            a per-page basis. Since we're returning a function, we can have complex nested layouts
            if desired.
          </Text>
          <Text weight={800}>XL</Text>
          <Text size="xl" mb={16}>
            If you need multiple layouts, you can add a property getLayout to your page, allowing
            you to return a React component for the layout. This allows you to define the layout on
            a per-page basis. Since we're returning a function, we can have complex nested layouts
            if desired.
          </Text>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pl="xs">
          <Frame shadow mb={20} contrast={level} borderColor="blue" rounded>
            <div onClick={() => setLevel(level == 4 ? 7 : 4)}>
              This FRAME problem is occurred when you have tried to rehydrate you react app.
              Generated react app rehydrate with generated markup at that time it show empty space
              between jsx tags.
            </div>
          </Frame>
          <Frame
            shadow
            mb={20}
            contrast={level}
            color={theme.colors.orange[0]}
            altColor="gray"
            borderColor="gray"
            titleColor="gray"
            title="Frame with title"
            description="Mendulang gajah di semak belukar"
          >
            <div onClick={() => setLevel(level == 4 ? 7 : 4)}>
              This FRAME problem is occurred when you have tried to rehydrate you react app.
              Generated react app rehydrate with generated markup at that time it show empty space
              between jsx tags.
            </div>
          </Frame>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pl="xs">
          Settings tab content
        </Tabs.Panel>
      </PTabs>
      <div></div>
    </>
  );
}

UX.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout type="Aces Corporate" title="User Interface">
      {page}
    </Layout>
  );
};
