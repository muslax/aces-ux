import React, { useContext, useState } from 'react';
import useUser from 'lib/useUser';
import Layout from 'components/iron/Layout';
import Form from 'components/iron/Form';
import fetchJson, { FetchError } from 'lib/fetchJson';
import SessionContext from 'components/session-provider/SessionProvider';
import { User } from './api/user';

export default function Login() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/projects',
    redirectIfFound: true,
  });

  const { setSessionUser } = useContext(SessionContext);

  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Layout>
      <div
        style={{
          maxWidth: '21rem',
          margin: '0 auto',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: 5,
        }}
      >
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
              mutateUser(user, false);
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message);
              } else {
                console.error('An unexpected error happened:', error);
              }
            }
          }}
        />
      </div>
    </Layout>
  );
}
