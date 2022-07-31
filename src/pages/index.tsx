import Link from 'next/link';
import { useContext } from 'react';
import SessionContext from 'components/session-provider/SessionProvider';

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
