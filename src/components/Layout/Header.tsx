import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Menu, Text } from '@mantine/core';
import { Logout, Settings, UserCircle } from 'tabler-icons-react';
import SessionContext from 'components/session-provider/SessionProvider';
import Container from './Container';
import { useStyles } from './Layout.styles';
import fetchJson from 'lib/fetchJson';
import useUser from 'lib/useUser';

export default function Header({ yScroll }: { yScroll?: number }) {
  const { sessionUser } = useContext(SessionContext);
  const { mutateUser } = useUser();
  const router = useRouter();
  const { classes, cx } = useStyles();
  const root =
    yScroll !== undefined
      ? cx(classes.header, classes.headerFixed, { [classes.headerScrolled]: yScroll >= 120 })
      : classes.header;
  return (
    <div className={root}>
      <Container>
        <div className={classes.headerwrap}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 100,
              backgroundColor: '#ececec',
              border: '1px solid #789',
            }}
          />
          <div style={{ display: 'flex', flexGrow: 1, fontWeight: 500 }}>
            <Link href={sessionUser?.isLoggedIn ? '/projects' : '/'}>
              <a style={{ color: 'black', textDecoration: 'none' }}>Aces Partner</a>
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <Link href="/ux">
              <a style={{ fontSize: 14, color: '#333', textDecoration: 'none' }}>UI</a>
            </Link>
            {sessionUser?.isLoggedIn && (
              <Menu position="bottom-end" withArrow>
                <Menu.Target>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                    <Text size={14}>{sessionUser.login}</Text>
                    <UserCircle size={16} />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<Settings size={14} />} onClick={() => {}}>
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    component="a"
                    href="/api/logout"
                    color="red"
                    icon={<Logout size={14} />}
                    onClick={async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                      e.preventDefault();
                      mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
                      router.push('/');
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
            {(!sessionUser || !sessionUser?.isLoggedIn) && (
              <Link href="/login">
                <Button component="a" variant="outline" color="gray" size="xs" style={{}}>
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
