import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useElementSize } from '@mantine/hooks';
import { AppRoute } from './Menu';
import { useStyles } from './Mobile.styles';
import { DotsVertical } from 'tabler-icons-react';

export default function Mobilenav({ links, yScroll }: { links: AppRoute[]; yScroll: number }) {
  const { classes, cx } = useStyles();
  const navClasses = cx(classes.nav, {
    [classes.navFixed]: yScroll > 70,
    [classes.navScrolled]: yScroll >= 163,
  });
  const { ref, width } = useElementSize();
  const [shadowLinks, setShadowLinks] = useState<AppRoute[]>([]);

  useEffect(() => {
    const rs: AppRoute[] = [];
    let top = 0;
    document.querySelectorAll('#navwrap a').forEach((el, i) => {
      const _top = el.getBoundingClientRect().top;
      if (i == 0) top = _top;
      if (_top > top) rs.push(links[i]);
    });
    setShadowLinks(rs);
    return () => {};
  }, [width, links]);

  return (
    <div id="nav-mobile" className={navClasses}>
      <div ref={ref}>
        <div className={classes.wrap}>
          <div id="navwrap" className={classes.flex}>
            {links.map((link) => (
              <LinkItem key={link.href} link={link} />
            ))}
          </div>
          {/* <div className={classes.menuwrap}> */}
          <div
            style={{
              // width: 150,
              // height: 50,
              // position: 'relative',
              display: 'flex',
              justifyContent: 'end',
              paddingTop: 18,
            }}
          >
            {shadowLinks.length > 0 && (
              <Menu position="bottom-end" withArrow>
                <Menu.Target>
                  <div style={{ display: 'flex' }}>
                    <DotsVertical size={16} />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  {shadowLinks.map((link) => (
                    <Menu.Item
                      key={link.href}
                      component={NextLink}
                      href={link.href}
                      style={{ fontSize: 14, fontWeight: 400 }}
                    >
                      {link.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkItem({ link }: { link: { href: string; label: string } }) {
  const { asPath } = useRouter();
  const { classes, cx } = useStyles();
  return (
    <Link href={link.href}>
      <a
        className={cx(classes.item, {
          [classes.active]: asPath == link.href,
        })}
      >
        <span>{link.label}</span>
      </a>
    </Link>
  );
}
