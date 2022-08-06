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

export type AppRoute = {
  href: string;
  label: string;
  hidden?: boolean;
  icon?: ReactNode;
};

export function getAppRoutes(project?: ProjectInfo) {
  if (project === undefined) return userRoutes;
  const routes = project.type == 'recruitment' ? recruitmentRoutes : projectRoutes;
  const array: AppRoute[] = [];
  routes.forEach((route) => {
    array.push({
      ...route,
      href: `/projects/${project.id}${route.href}`,
    });
  });
  return array;
}

const iconSize = 18;

const userRoutes: AppRoute[] = [
  {
    href: '/projects',
    label: 'Projects',
    icon: <Folders size={iconSize} />,
  },
  {
    href: '/clients',
    label: 'Clients',
    icon: <Building size={iconSize} />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Settings size={iconSize} />,
  },
  {
    href: '/billing',
    label: 'Billing',
    icon: <ReportMoney size={iconSize} />,
  },
];

// export function getProjectMenu(project: ProjectInfo | undefined) {
//   if (!project) return [];
//   const source = project.type == 'recruitment' ? recruitmentMenu : projectMenu;
//   const links: LinkProps[] = [];
//   source.forEach((link) => {
//     links.push({
//       ...link,
//       href: `/projects/${project.id}${link.href}`,
//     });
//   });
//   return links;
// }

const projectRoutes: AppRoute[] = [
  {
    href: '',
    label: 'Overview',
    icon: <FileDescription size={iconSize} />,
  },
  {
    href: '/setup',
    label: 'Setup',
    icon: <Settings size={iconSize} />,
  },
  {
    href: '/peserta',
    label: 'Peserta',
    icon: <Users size={iconSize} />,
  },
  {
    href: '/deploy',
    label: 'Deployment',
    icon: <ListCheck size={iconSize} />,
  },
  {
    href: '/monitoring',
    label: 'Monitoring',
    icon: <HeartRateMonitor size={iconSize} />,
  },
  {
    href: '/laporan',
    label: 'Laporan',
    icon: <Report size={iconSize} />,
  },
  {
    href: '/edit-modules',
    label: 'Edit Modules',
    hidden: true,
  },
];

const recruitmentRoutes: AppRoute[] = [
  {
    href: '',
    label: 'Overview',
    icon: <FileDescription size={iconSize} />,
  },
  {
    href: '/setup',
    label: 'Setup',
    icon: <Settings size={iconSize} />,
  },
  {
    href: '/pendaftaran',
    label: 'Pendaftaran',
    icon: <Speakerphone size={iconSize} />,
  },
  {
    href: '/seleksi',
    label: 'Seleksi',
    icon: <Select size={iconSize} />,
  },
  {
    href: '/wawancara',
    label: 'Wawancara',
    icon: <Messages size={iconSize} />,
  },
  {
    href: '/laporan',
    label: 'Laporan',
    icon: <Report size={iconSize} />,
  },
  {
    href: '/edit-modules',
    label: 'Edit Modules',
    hidden: true,
  },
];
