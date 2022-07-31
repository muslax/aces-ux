import Head from 'next/head';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import fetchJson from 'lib/fetchJson';
import { SessionProvider } from 'components/session-provider/SessionProvider';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

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
        <MantineProvider theme={{}} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <SessionProvider>
              <Component {...pageProps} />
            </SessionProvider>
          </NotificationsProvider>
        </MantineProvider>
      </SWRConfig>
    </>
  );
}

// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
//   colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
// });
