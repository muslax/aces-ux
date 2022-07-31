import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Link from 'next/link';
import useUser from 'lib/useUser';

export default function HomePage() {
  const { user } = useUser();
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
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
