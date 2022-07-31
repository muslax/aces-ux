import Form from 'components/iron/Form';
import SessionContext from 'components/session-provider/SessionProvider';
import fetchJson, { FetchError } from 'lib/fetchJson';
import { User } from 'pages/api/user';
import { ReactNode, useContext, useState } from 'react';

type LayoutProps = {
  allowLogin?: boolean; // Allow login in place
  children: ReactNode;
};

export default function Layout({ allowLogin, children }: LayoutProps) {
  const { sessionUser } = useContext(SessionContext);

  return (
    <>
      {allowLogin && !sessionUser?.isLoggedIn && <LoginForm />}
      {(!allowLogin || sessionUser?.isLoggedIn) && <>{children}</>}
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
