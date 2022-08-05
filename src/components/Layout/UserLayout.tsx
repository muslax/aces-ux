import { ReactNode, useContext, useEffect, useState } from 'react';
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
import { getAppRoutes } from 'components/Menu/Menu';
import { useRouter } from 'next/router';
import useAuthApi from 'lib/useAuthApi';
import { ProjectInfo } from 'lib/queries/getProject';
import { useHookConditionally } from './useHookConditionally';
import ProjectContext from 'components/ProjectProvider';

type LayoutProps = {
  type: 'user-layout' | 'project-layout' | 'basic';
  page: string;
  title: string;
  children: ReactNode;
};

export default function UserLayout({ type, page, title, children }: LayoutProps) {
  const { classes, cx } = useStyles();
  const { sessionUser } = useContext(SessionContext);
  const { projectContext, setProjectContext } = useContext(ProjectContext);
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();
  const id = router.query.id ? (router.query.id as string) : undefined;
  // Hack to prevent flicker (to keep using this same layout)
  const subject = id ? 'get-project' : 'get-layout';
  const { data, isLoading, error } = useAuthApi(subject, id);

  const [routes, setRoutes] = useState(getAppRoutes());
  useEffect(() => {
    if (data && data.id) {
      setRoutes(getAppRoutes(data as ProjectInfo));
      setProjectContext(data);
    } else {
      setRoutes(getAppRoutes());
    }
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
  if (routes.find((item) => item.href == router.asPath) == undefined) {
    return (
      <Center>
        <p>Service not found</p>
      </Center>
    );
  }

  return (
    <>
      {/* <WithConditionalHook condition={true}> */}
      <Header yScroll={scroll.y} />
      <Mobilenav yScroll={scroll.y} links={routes} />
      <Hero type={page} title={title} yScroll={scroll.y} />
      <Container>
        <div className={classes.pageWrap}>
          <div className={classes.pageFlex}>
            <aside className={classes.aside}>
              <Sidebar links={routes} />
            </aside>
            <main className={classes.main}>
              <>{children}</>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
      {/* </WithConditionalHook> */}
    </>
  );
}

function WithConditionalHook({ condition, children }: { condition: boolean; children: ReactNode }) {
  const useMyHook = () => 'This was called conditionally';
  const rs = () => useAuthApi('get-project', 'bogus-assessment');
  // @ts-ignore
  const { output, children: nodes } = useHookConditionally({
    condition,
    hook: rs,
    children,
  });
  console.log(output.current);
  // will output the return value from the hook if
  // condition is true
  return nodes;
}
