import { ReactNode } from 'react';
import { Aperture } from 'tabler-icons-react';

export type LinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const UserMenu: LinkProps[] = [
  {
    href: '/ui',
    label: 'UI-UX',
    icon: <Aperture size={18} />,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <Aperture size={18} />,
  },
  {
    href: '/clients',
    label: 'Clients',
    icon: <Aperture size={18} />,
  },
  {
    href: '/billing',
    label: 'Billing',
    icon: <Aperture size={18} />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Aperture size={18} />,
  },
];
