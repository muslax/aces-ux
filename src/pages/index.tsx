import Link from 'next/link';
import { ReactElement, useContext } from 'react';
import SessionContext from 'components/session-provider/SessionProvider';
import Layout from 'components/Layout/Layout';

export default function HomePage() {
  const { sessionUser: user } = useContext(SessionContext);
  return (
    <>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
        {` - `}
        <Link href="/profile-sg">
          <a>SSG</a>
        </Link>
        {` - `}
        <a href="/profile-ssr">SSR</a>
      </p>
      {user?.isLoggedIn && <p>USER: {user.login}</p>}
      {!user?.isLoggedIn && <p>NO USER</p>}
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  // return (
  //   <>
  //     <div>From getLayout</div>
  //     {page}
  //   </>
  // );
  return (
    <Layout>
      <main>{page}</main>
    </Layout>
  );
};
