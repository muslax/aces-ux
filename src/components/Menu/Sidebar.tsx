import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppRoute } from './Menu';
import { useStyles } from './Sidebar.styles';

export default function Sidebar({ links }: { links: AppRoute[] }) {
  const { asPath } = useRouter();
  const { classes } = useStyles({});
  return (
    <ul className={classes.wrap}>
      {links.map((item) => (
        <SidebarItem key={item.href} link={item} active={item.href == asPath} />
      ))}
    </ul>
  );
}

function SidebarItem({ link, active }: { link: AppRoute; active?: boolean }) {
  const { classes } = useStyles({ active: active });
  return (
    <li className={classes.itemWrap}>
      <Link href={link.href}>
        <a className={classes.item}>
          <span className={classes.icon}>{link.icon && link.icon}</span>
          <span className={classes.label}>{link.label}</span>
        </a>
      </Link>
    </li>
  );
}
