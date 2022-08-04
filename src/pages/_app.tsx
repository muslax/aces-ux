import Head from 'next/head';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import fetchJson from 'lib/fetchJson';
import { SessionProvider } from 'components/session-provider/SessionProvider';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { ProjectProvider } from 'components/ProjectProvider';

export type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: 'violet',
            fontSizes: {
              xs: 12,
              sm: 13,
              md: 14.25,
              lg: 16,
              xl: 18,
            },
          }}
        >
          <NotificationsProvider>
            <SessionProvider>
              <ProjectProvider>
                <>{getLayout(<Component {...pageProps} />)}</>
              </ProjectProvider>
            </SessionProvider>
          </NotificationsProvider>
        </MantineProvider>
      </SWRConfig>
    </>
  );
}
