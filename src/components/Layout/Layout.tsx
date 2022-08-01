import { Box, useMantineTheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import Hero from 'components/Hero/Hero';
import Form from 'components/iron/Form';
import Mobilenav from 'components/Menu/Mobile';
import SessionContext from 'components/session-provider/SessionProvider';
import fetchJson, { FetchError } from 'lib/fetchJson';
import { User } from 'pages/api/user';
import { ReactNode, useContext, useState } from 'react';
import Container from './Container';
import Header from './Header';

type LayoutProps = {
  allowLogin?: boolean; // Allow login in place
  children: ReactNode;
  type?: string;
  title?: string;
};

export default function Layout({ allowLogin, type, title, children }: LayoutProps) {
  const { sessionUser } = useContext(SessionContext);
  const [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();

  return (
    <>
      {allowLogin && !sessionUser?.isLoggedIn && <>{children}</>}
      {(!allowLogin || sessionUser?.isLoggedIn) && (
        <>
          <Header />
          {/* <Mobilenav yScroll={scroll.y} /> */}
          {/* <Hero type={type || 'ABCD'} title={title || 'Untitled'} yScroll={scroll.y} /> */}
          <Box
            py={16}
            style={{ backgroundColor: `${theme.colors.gray[2]}50`, minHeight: 'calc(100vh)' }}
          >
            <Container>{children}</Container>
          </Box>
        </>
      )}
    </>
  );
}

function LoginForm() {
  const { setSessionUser } = useContext(SessionContext);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Form
      errorMessage={errorMsg}
      onSubmit={async function handleSubmit(event) {
        event.preventDefault();

        const body = {
          username: event.currentTarget.username.value,
        };

        try {
          const user: User = await fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          setSessionUser(user);
        } catch (error) {
          if (error instanceof FetchError) {
            setErrorMsg(error.data.message);
          } else {
            console.error('An unexpected error happened:', error);
          }
        }
      }}
    />
  );
}
