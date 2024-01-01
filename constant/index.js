import { adminSidebarImage, contactImages } from '../public/assets';

export const contactInfoData = [
  {
    id: 1,
    logo: contactImages.whatsappIcon,
    type: 'whatsapp',
    data: '+8801785952562',
  },
  {
    id: 2,
    logo: contactImages.imoIcon,
    type: 'imo',
    data: '+8801785952562',
  },
  {
    id: 3,
    logo: contactImages.emailIcon,
    type: 'email',
    data: 'gowinoffcialwebsite@gmail.com',
  },
];

export const ProfileSidebarList = [
  'Personal Details',
  'Profile Settings',
  'Transaction History',
];

export const SidebarList = [
  {
    id: 1,
    route: '/dashboard',
    name: 'Dashboard',
    icon: adminSidebarImage.dashboard,
    iconWhite: adminSidebarImage.dashboardWhite,
  },
  {
    id: 2,
    route: '/pending-user',
    name: 'Pending User',
    icon: adminSidebarImage.pendingUser,
    iconWhite: adminSidebarImage.pendingUserWhite,
  },
  {
    id: 3,
    route: '/active-user',
    name: 'Active Users',
    icon: adminSidebarImage.user,
    iconWhite: adminSidebarImage.userWhite,
  },
  {
    id: 3,
    route: '/pending-winner',
    name: 'Pending Winners',
    icon: adminSidebarImage.pendingWinners,
    iconWhite: adminSidebarImage.pendingWinnersWhite,
  },
  // {
  //   id: 4,
  //   route: '/winners',
  //   name: 'Winners',
  //   icon: adminSidebarImage.user,
  // },
  {
    id: 5,
    route: '/settings',
    name: 'Settings',
    icon: adminSidebarImage.settings,
    iconWhite: adminSidebarImage.settingsWhite,
  },
];

export const PrizeName = [
  {
    id: 'Super Six',
    label: 'Super Six',
    value: 'Super Six',
  },
  {
    id: 'Fun Four',
    label: 'Fun Four',
    value: 'Fun Four',
  },
  {
    id: 'Lucky Three',
    label: 'Lucky Three',
    value: 'Lucky Three',
  },
];
