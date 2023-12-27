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
    name: 'Active User',
    icon: adminSidebarImage.user,
    iconWhite: adminSidebarImage.userWhite,
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
