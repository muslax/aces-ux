import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './Menu';
import { useStyles } from './Sidebar.styles';

export default function Sidebar({ links }: { links: LinkProps[] }) {
  const { pathname } = useRouter();
  const { classes } = useStyles({});
  return (
    <ul className={classes.wrap}>
      {links.map((item) => (
        <SidebarItem key={item.href} link={item} active={item.href == pathname} />
      ))}
    </ul>
  );
}

function SidebarItem({ link, active }: { link: LinkProps; active?: boolean }) {
  const { classes } = useStyles({ active: active });
  return (
    <li className={classes.itemWrap}>
      <Link href={link.href}>
        <a className={classes.item}>
          {link.icon && link.icon}
          <span className="">{link.label}</span>
        </a>
      </Link>
    </li>
  );
}
