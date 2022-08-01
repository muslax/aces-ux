import Link from 'next/link';
import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from 'lib/fetchJson';

export default function Header() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <header
      style={{
        padding: '0.2rem',
        color: '#fff',
        backgroundColor: '#333',
      }}
    >
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: 15,
            listStyle: 'none',
            marginLeft: 0,
            paddingLeft: 15,
          }}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user?.isLoggedIn === false && (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn === true && (
            <>
              <li>
                <Link href="/profile-sg">
                  <a>Static</a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr">
                  <a>Server-side</a>
                </Link>
              </li>
              <li>
                {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
                    router.push('/');
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style>{`
        a {
          color: #ccc;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
}
