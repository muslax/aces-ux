import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Center } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import Footer from 'components/Footer/Footer';
import Hero from 'components/Hero/Hero';
import Mobilenav from 'components/Menu/Mobile';
import Sidebar from 'components/Menu/Sidebar';
import SessionContext from 'components/session-provider/SessionProvider';
import Container from './Container';
import Header from './Header';
import { useStyles } from './Layout.styles';
import { getProjectMenu, LinkProps } from 'components/Menu/Menu';
import useAuthApi from 'lib/useAuthApi';
import ProjectContext from 'components/ProjectProvider';
import Pojo from 'components/Pojo';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function ProjectLayout({ title, children }: LayoutProps) {
  const { sessionUser } = useContext(SessionContext);
  const [scroll, scrollTo] = useWindowScroll();
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { data, isLoading, error } = useAuthApi('get-project', router.query.id as string);
  const { projectContext, setProjectContext } = useContext(ProjectContext);
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    if (data) {
      setProjectContext(data || undefined);
      setLinks(getProjectMenu(data));
    }
    return () => {};
  }, [data]);

  // Keep returning children to allow client redirect
  if (!sessionUser || !sessionUser?.isLoggedIn) return <>{children}</>;

  if (isLoading) return <></>;
  if (error) {
    return (
      <Center>
        <p>Project not found</p>
      </Center>
    );
  }
  if (links.find((item) => item.href == router.asPath) == undefined) {
    return (
      <Center>
        <p>Service not found</p>
      </Center>
    );
  }

  return (
    <>
      <Header yScroll={scroll.y} />
      <Mobilenav yScroll={scroll.y} links={links} />
      <Hero type={projectContext?.type || 'ABCD'} title={title || 'Untitled'} yScroll={scroll.y} />
      <Container>
        <div className={classes.pageWrap}>
          <div className={classes.pageFlex}>
            <aside className={classes.aside}>
              <Sidebar links={links} />
            </aside>
            <main className={classes.main}>
              <>{children}</>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
