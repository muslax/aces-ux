import { ProjectInfo } from 'lib/queries/getProject';
import { ReactNode } from 'react';
import {
  Aperture,
  Building,
  FileDescription,
  Folder,
  Folders,
  HeartRateMonitor,
  ListCheck,
  Messages,
  Report,
  ReportMoney,
  Select,
  Settings,
  Speakerphone,
  Users,
} from 'tabler-icons-react';

export type LinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const UserMenu: LinkProps[] = [
  {
    href: '/projects',
    label: 'Projects',
    icon: <Folders size={18} />,
  },
  {
    href: '/clients',
    label: 'Clients',
    icon: <Building size={18} />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Settings size={18} />,
  },
  {
    href: '/billing',
    label: 'Billing',
    icon: <ReportMoney size={18} />,
  },
];

export function getProjectMenu(project: ProjectInfo | undefined) {
  if (!project) return [];
  const source = project.type == 'recruitment' ? recruitmentMenu : projectMenu;
  const links: LinkProps[] = [];
  source.forEach((link) => {
    links.push({
      ...link,
      href: `/projects/${project.id}${link.href}`,
    });
  });
  return links;
}

const projectMenu: LinkProps[] = [
  {
    href: '',
    label: 'Overview',
    icon: <FileDescription size={18} />,
  },
  {
    href: '/setup',
    label: 'Setup',
    icon: <Settings size={18} />,
  },
  {
    href: '/peserta',
    label: 'Peserta',
    icon: <Users size={18} />,
  },
  {
    href: '/deploy',
    label: 'Deployment',
    icon: <ListCheck size={18} />,
  },
  {
    href: '/monitoring',
    label: 'Monitoring',
    icon: <HeartRateMonitor size={18} />,
  },
  {
    href: '/laporan',
    label: 'Laporan',
    icon: <Report size={18} />,
  },
];

const recruitmentMenu: LinkProps[] = [
  {
    href: '',
    label: 'Overview',
    icon: <FileDescription size={18} />,
  },
  {
    href: '/setup',
    label: 'Setup',
    icon: <Settings size={18} />,
  },
  {
    href: '/pendaftaran',
    label: 'Pendaftaran',
    icon: <Speakerphone size={18} />,
  },
  {
    href: '/seleksi',
    label: 'Seleksi',
    icon: <Select size={18} />,
  },
  {
    href: '/wawancara',
    label: 'Wawancara',
    icon: <Messages size={18} />,
  },
  {
    href: '/laporan',
    label: 'Laporan',
    icon: <Report size={18} />,
  },
];
