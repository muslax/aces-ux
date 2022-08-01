import { ReactNode, useContext } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import Footer from 'components/Footer/Footer';
import Hero from 'components/Hero/Hero';
import Mobilenav from 'components/Menu/Mobile';
import Sidebar from 'components/Menu/Sidebar';
import SessionContext from 'components/session-provider/SessionProvider';
import Container from './Container';
import Header from './Header';
import { useStyles } from './Layout.styles';
import { UserMenu } from 'components/Menu/Menu';

type LayoutProps = {
  children: ReactNode;
  type?: string;
  title?: string;
};

export default function UserLayout({ type, title, children }: LayoutProps) {
  const { classes, cx } = useStyles();
  const { sessionUser } = useContext(SessionContext);
  const [scroll, scrollTo] = useWindowScroll();

  // Keep returning children to allow client redirect
  if (!sessionUser || !sessionUser?.isLoggedIn) return <>{children}</>;

  return (
    <>
      <>
        <Header yScroll={scroll.y} />
        <Mobilenav yScroll={scroll.y} links={UserMenu} />
        <Hero type={type || 'ABCD'} title={title || 'Untitled'} yScroll={scroll.y} />
        <Container>
          <div className={classes.pageWrap}>
            <div className={classes.pageFlex}>
              <aside className={classes.aside}>
                <Sidebar links={UserMenu} />
              </aside>
              <main className={classes.main}>
                <>{children}</>
              </main>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    </>
  );
}
