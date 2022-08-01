import { Menu } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkProps } from './Menu';
import { useStyles } from './Mobile.styles';

export default function Mobilenav({ links, yScroll }: { links: LinkProps[]; yScroll: number }) {
  const { classes, cx } = useStyles();
  const navClasses = cx(classes.nav, {
    [classes.navFixed]: yScroll > 70,
    [classes.navScrolled]: yScroll >= 163,
  });
  const { ref, width } = useElementSize();
  const [shadowLinks, setShadowLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const rs: LinkProps[] = [];
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
          <div className={classes.menuwrap}>
            {shadowLinks.length > 0 && (
              <Menu>
                {shadowLinks.map((link) => (
                  <Menu.Item
                    key={link.href}
                    component={NextLink}
                    href={link.href}
                    style={{ fontSize: 14.5, fontWeight: 500 }}
                  >
                    {link.label}
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkItem({ link }: { link: { href: string; label: string } }) {
  const { pathname } = useRouter();
  const { classes, cx } = useStyles();
  return (
    <Link href={link.href}>
      <a
        className={cx(classes.item, {
          [classes.active]: pathname == link.href,
        })}
      >
        <span>{link.label}</span>
      </a>
    </Link>
  );
}
