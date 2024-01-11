import { adminSidebarImage, contactImages } from '../public/assets';

export const contactIcon = {
  whatsapp: contactImages.whatsappIcon,
  imo: contactImages.imoIcon,
  email: contactImages.emailIcon,
};

export const contactInfoData = [
  {
    id: 1,
    logo: contactImages.whatsappIcon,
    type: 'whatsapp',
    data: '601127247651',
  },
  {
    id: 2,
    logo: contactImages.imoIcon,
    type: 'imo',
    data: '601127247651',
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
    id: 4,
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

export const dummyData = [
  {
    winnerImage:
      'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=51760292-6e17-4c23-a075-9d04674adab4',
    winnerAlt: 'GoWin-Winner 2023-12-28 at 6.09.02 PM',
    orginalImage:
      'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-28-at-6.09.02-PM-qhhjw2cbg6xd9yhzixj41zrlpzcmdez1nsmufa5ljs.jpeg',
    orginalImageAlt: 'WhatsApp Image 2023-12-28 at 6.09.02 PM',
  },
  {
    winnerImage:
      'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
    winnerAlt: 'GoWin-Winner 2023-12-29 at 10.07.12 PM',
    orginalImage:
      'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.07.12-PM-qhjbboap970ll7ffuj8i88dcqxq7t1qvam4soy82u0.jpeg',
    orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.07.12 PM',
  },
  {
    winnerImage:
      'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1948be95-5c98-4ca1-8bb3-9718e083f74d',
    winnerAlt: 'GoWin-Winner 2023-12-29 at 10.07.16 PM',
    orginalImage:
      'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.07.16-PM-qhjbbp8jg11vwte2p1n4sq4tcbll0qulmqsa686ons.jpeg',
    orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.07.16 PM',
  },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3fddffa7-2cde-49c7-92e0-8b64ffa4d46a',
  //   winnerAlt: 'GoWin-Winner 2023-12-29 at 10.07.09 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.07.09-PM-qhjb9uhzysij0i30iqsmdoz35yqiu8hnpkgt3kxmxk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.07.09 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0ce03489-dfa6-45a7-8901-4a0be02721d4',
  //   winnerAlt: 'GoWin-Winner 2023-12-29 at 10.07.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.07.03-PM-qhjb9vfu5mjtc41nd978y6qjrclw1xle1p4akuw8rc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.07.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c77d1ce0-38ea-4476-a3de-050ef79a1a06',
  //   winnerAlt: 'GoWin-Winner 2023-12-29 at 10.07.02 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.07.02-PM-qhjb9wdocgl3nq0a7rlvioi0cqh99mp4dtrs24uul4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.07.02 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=60ad193b-2c20-44a9-8d5f-2f1ba70bf801',
  //   winnerAlt: 'GoWin-Winner 2023-12-29 at 10.06.59 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.06.59-PM-qhjb8mbl1ku1utv6opp5mi4f8us9sgm9vhszjkr520.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.06.59 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=518d67c4-ed6b-4137-afda-e75707a7f976',
  //   winnerAlt: 'GoWin-Winner 2023-12-27 at 9.41.14 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-27-at-9.41.14-PM-qhhk14p0a1uzub53y4cqhpr0yqdtup2z0v71iyn80o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-27 at 9.41.14 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4b0fa7c6-36b1-4ec2-96d0-e24afe198f47',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.43 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.43-PM-qhfl1y79x80f6uomemopfi7zd4jjj76z1wbuqb8ifs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.43 PM',
  // },
  // {
  //   winnerAlt: 'GoWin-Winner 2023-12-29 at 10.06.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-29-at-10.06.56-PM-qhjb7s8qyvovjb2vkcp3eppo8iwiy5av3cxg6pzql4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-29 at 10.06.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-12-27 at 9.41.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-27-at-9.41.08-PM-qhhk041avigt9imcw6iaah01speiii1fvtr3t65krc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-27 at 9.41.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=adf52fe7-eac8-4927-9171-1861ab022f2c',
  //   winnerAlt: 'GoWin-Winner 2023-12-27 at 9.41.07 PM (2)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-27-at-9.41.07-PM-2-qhhjwujh57zyy9d0y9px4snfjjhmsc2zro7etkzsd4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-27 at 9.41.07 PM (2)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=94d218ef-50b2-4494-ad11-a26926e60568',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.38 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.38-PM-qhfl1egnxp9ef1halw5jh57aw18u1k0lz6mnni1s2g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.38 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2611c100-3163-4621-8ec0-1f127de40d06',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.36 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.36-PM-qhfl1fei4jaoqnfxgek61myrhf47994cbba54s0dw8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.36 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d540eb14-4988-4d6d-9037-e4924fe2c477',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.35 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.35-PM-qhfl093rkzos875dbe9yffn0r2womvgf5hxajbr3o8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.35 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1bb37670-d568-45a1-95b8-ae8c179bdad1',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.28-PM-qhfl0a1lrtq2jt405wokzxehcgs1ukk5hmks0lppi0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f2d7ee6f-dc44-443a-8509-f6ba0af0b4ee',
  //   winnerAlt: 'GoWin-Winner 2023-12-26 at 8.40.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-26-at-8.40.27-PM-qhfl0azfynrcvf2n0f37kf5xxunf29nvtr89hvobbs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-26 at 8.40.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2afca83b-dcaa-4f65-bfe1-07d99a765fb3',
  //   winnerAlt: 'GoWin-Winner 2023-12-25 at 9.33.39 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-25-at-9.33.39-PM-qhfkzfyrp4kw8abp1jois4zqc4wb098qphp8nqyb14.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-25 at 9.33.39 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=43efa751-03d5-407e-8155-c8d57aea9319',
  //   winnerAlt: 'GoWin-Winner 2023-12-27 at 9.41.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-27-at-9.41.03-PM-qhhjxx2uxfgq69t1p8dmh0xbwc7ojxbzkyybhxena0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-27 at 9.41.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=275c85ff-6ef0-4c36-81b6-6ac44a236cf3',
  //   winnerAlt: 'GoWin-Winner 2023-12-22 at 9.35.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-22-at-9.35.08-PM-qhag2nw56ty84ho2ym7n0gc84xbfrvadtho0j70ymw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-22 at 9.35.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=57fa157a-7f30-41e4-998d-4414dfcb2d4b',
  //   winnerAlt: 'GoWin-Winner 2023-12-22 at 9.35.05 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-22-at-9.35.05-PM-qhag2l2mmbud5ns6f2zraz1ucrpc4rz6t3pk3d555k.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-22 at 9.35.05 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f2d7ee6f-dc44-443a-8509-f6ba0af0b4ee',
  //   winnerAlt: 'GoWin-Winner 2023-12-22 at 9.35.04 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-22-at-9.35.04-PM-qhag237p0h5x12i4bd9uhlk32g5d2j0aenbbz3vmfs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-22 at 9.35.04 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-12-22 at 9.34.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-22-at-9.34.56-PM-qhag1796k3y62bsjhzgj4tmevcivsthey94tnp70bc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-22 at 9.34.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0c63011f-c0f7-4e7f-a901-25a9cf3c5a4b',
  //   winnerAlt: 'GoWin-Winner 2023-12-21 at 7.45.04 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-21-at-7.45.04-PM-qhag0r9xbxcakyfr3ajvgfnkrspn5ypz821khzup94.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-21 at 7.45.04 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f48aba90-2358-4676-ba72-ad1f6effe2ff',
  //   winnerAlt: 'GoWin-Winner 2023-12-22 at 9.34.55 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-22-at-9.34.55-PM-qhag02u4e8eu73f91zzknltlbs23lu0ygp2y0suxqw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-22 at 9.34.55 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-12-20 at 8.02.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-20-at-8.02.28-PM-qhfkxl887w1jbz0mv8u0d3u05s18tqvssbdrl3p9aw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-20 at 8.02.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=adf52fe7-eac8-4927-9171-1861ab022f2c',
  //   winnerAlt: 'GoWin-Winner 2023-12-20 at 8.02.26 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-20-at-8.02.26-PM-qhfkw6gxyu41x12d3mw5mgn42yzfa3aalc5jo5simw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-20 at 8.02.26 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fcd6b3b5-9323-48e2-b30a-e008462aef46',
  //   winnerAlt: 'GoWin-Winner 2023-12-19 at 9.48.02 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-19-at-9.48.02-PM-qhfku8wvx3gu1vvedstrhy704gi9ghm5nrvm5onnfc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-19 at 9.48.02 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4c0c0592-0ea6-48c8-a322-f202b4f03334',
  //   winnerAlt: 'GoWin-Winner 2023-12-18 at 9.51.24 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-18-at-9.51.24-PM-qh1vfyegso88q8lboya6x7a9eol0ewjpklap6wzfq0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-18 at 9.51.24 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=770a710b-eba3-423c-800a-df21eb8dcd8e',
  //   winnerAlt: 'GoWin-Winner 2023-12-20 at 8.02.17 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-20-at-8.02.17-PM-qhfktfrw18cy1z1q3y8bunjppihvtveh7rnka3uus8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-20 at 8.02.17 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-12-18 at 9.51.22 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-18-at-9.51.22-PM-qh1vfjd1rbnnkh764rs5tb2vwin4zqw06iuxihlqhk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-18 at 9.51.22 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e61c35f8-95e8-4585-9088-a05dbe9737d6',
  //   winnerAlt: 'GoWin-Winner 2023-12-19 at 9.47.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-19-at-9.47.56-PM-qhfkrwbeu0910zaa3s9c9jjins387qabc55wys52zc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-19 at 9.47.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a7c2436d-d3eb-4fbd-8e33-94184c5311ac',
  //   winnerAlt: 'GoWin-Winner 2023-12-18 at 9.51.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-18-at-9.51.20-PM-qh1vf67b3n5n1xqa9m3dueefl4fzzzfrgpq4sm58wo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-18 at 9.51.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0beeadbe-3d05-47c0-b47c-7a8b894b112b',
  //   winnerAlt: 'GoWin-Winner 2023-12-18 at 9.51.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-18-at-9.51.18-PM-qh1ver5w2al1w6c4pflcqi722yi4kts22nad46rjo8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-18 at 9.51.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=03dae694-512b-45dd-9145-85e82781bed3',
  //   winnerAlt: 'GoWin-Winner 2023-12-18 at 9.51.07 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-18-at-9.51.07-PM-qh1ve9aygfwlrl22lpvfx4pasmy5ikt5o6w4zxi0yg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-18 at 9.51.07 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c549af65-96be-43bd-b3d6-8a503783fd10',
  //   winnerAlt: 'GoWin-Winner 2023-12-14 at 10.48.06 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-14-at-10.48.06-PM-qh1vj60m5amie9xdxu9axw3yh2r5poap0hjf7y80go.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-14 at 10.48.06 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4b0fa7c6-36b1-4ec2-96d0-e24afe198f47',
  //   winnerAlt: 'GoWin-Winner 2023-12-15 at 8.04.59 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-15-at-8.04.59-PM-qh1vdy0w6fh5w9igfkzx37jro0hqy7kdmn2b8lyr14.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-15 at 8.04.59 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=94d218ef-50b2-4494-ad11-a26926e60568',
  //   winnerAlt: 'GoWin-Winner 2023-12-15 at 8.04.46 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-15-at-8.04.46-PM-qh1vdizh52wkqi4avehvzbce5ujvj1wo8kmjk6l1so.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-15 at 8.04.46 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=5f87997e-d982-47ff-9bb8-ae94185b7d22',
  //   winnerAlt: 'GoWin-Winner 2023-12-13 at 8.38.07 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-13-at-8.38.07-PM-qgrf64cyxx03jko7uovb8g2ogi9zuqiuixoro9j0ig.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-13 at 8.38.07 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1bb37670-d568-45a1-95b8-ae8c179bdad1',
  //   winnerAlt: 'GoWin-Winner 2023-12-14 at 10.48.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-14-at-10.48.03-PM-qh1vi949i3dh3x969y1d0metol9b89o37ypff9ksig.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-14 at 10.48.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-12-13 at 8.38.06 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-13-at-8.38.06-PM-qgrf676hif3yiek4e836xxd28nw3htu1jbn843etzs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-13 at 8.38.06 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2a6b907b-36e6-47ec-83a0-8b2204eeced4',
  //   winnerAlt: 'GoWin-Winner 2023-12-13 at 8.38.04 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-13-at-8.38.04-PM-qgrf684bp958u0ir8qhtif4iu1rgpixrvgaplddftk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-13 at 8.38.04 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.24 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.24-PM-1-qgp3k2svcahalaxfe2zn2iqi5cebo5uz0lrre6jryw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.24 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=724a7255-61bf-41a9-a5ac-91977474730f',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.22 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.22-PM-qgp3k4ojpyjv8iup33sw7i9fc4523k2fov2qcqgzmg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.22 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f48aba90-2358-4676-ba72-ad1f6effe2ff',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.24 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.24-PM-qgp3j8q19lc49s549pzkuqbr50iktujk8gw81bsdi0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.24 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cb7429ec-2ce9-41a9-ac93-eba1342fa9a5',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.20-PM-qgp3j9nvgfdele3r48e7f837qedy1jnakljpilqzbs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=53572d14-1c6e-4532-92ae-1dc905bfe0e2',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.12 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.12-PM-qgp3gu8vsu1qlnmqaolwhc5chkct5p098kvjvvcleg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.12 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=22e0d5a1-6d45-4530-be1e-72dbbab216e1',
  //   winnerAlt: 'GoWin-Winner 2023-12-11 at 10.57.06 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-11-at-10.57.06-PM-qgp3hq7e979hkecb42f7u430onzafej4oz227a17iw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-11 at 10.57.06 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-12-07 at 11.16.37 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-07-at-11.16.37-PM-qgiqrn2jd9f350t9ec5uzgfsqmqwnorya0ykt4sod4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-07 at 11.16.37 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fabe5265-a2a4-445c-ba0d-603fba02f675',
  //   winnerAlt: 'GoWin-Winner 2023-12-07 at 11.16.32 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-07-at-11.16.32-PM-qgiqrpw1xriy3up5xvdqoxq6isd0as35aex18yohug.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-07 at 11.16.32 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c77d1ce0-38ea-4476-a3de-050ef79a1a06',
  //   winnerAlt: 'GoWin-Winner 2023-12-07 at 11.16.34 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-07-at-11.16.34-PM-qgiqro0dk3gdgmrw8ukhjy79c0m9vdvom5m2aera6w.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-07 at 11.16.34 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=eb6f0fd2-336d-4670-a40d-4df5e7e3912b',
  //   winnerAlt: 'GoWin-Winner 2023-12-07 at 11.16.23 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-07-at-11.16.23-PM-qgiqqszpak9wti0y9z5sro11qav5tdgjhw31ga19w8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-07 at 11.16.23 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=563e7341-20b5-4db2-ac22-0ed992b19d85',
  //   winnerAlt: 'GoWin-Winner 2023-12-07 at 11.16.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-07-at-11.16.28-PM-qgiqqwr21wf23xvho0sb1n2w3ucmo5vgueozddvp7c.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-07 at 11.16.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0ce03489-dfa6-45a7-8901-4a0be02721d4',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.18 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.18-PM-1-qgf945lfqr3wpdfedjb65fxdp4fixfupcuoz49taag.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.18 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a23f3184-1f82-4fb5-9a1f-8afdea3c246c',
  //   winnerAlt: 'GoWin-Winner 2023-12-06 at 11.24.40 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-06-at-11.24.40-PM-qgiqqb4roplgowqw69fvyajafzb6r4hn3fotc0rr6g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-06 at 11.24.40 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=dd4f63dd-5b1a-400d-bd70-93ce5e8603b3',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.18-PM-qgf93sfp32lw6tyiidme6j8xdq8dxoegn1k6eecspk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=20ecbcb0-8859-4b01-8bca-205959cee1f5',
  //   winnerAlt: 'GoWin-Winner 2023-12-06 at 11.24.39 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-06-at-11.24.39-PM-qgiqpktadclfntt4fy2c0h6dt6wwrll5ntf7w9us0o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-06 at 11.24.39 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0beeadbe-3d05-47c0-b47c-7a8b894b112b',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.16 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.16-PM-qgf929x22oj9hg5pcq215x06xdp3j8e13jq0kclmqg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.16 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f042a53d-85a8-4c93-814d-feb9c0298064',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.14 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.14-PM-qgf92auw9ikjt24c78gnqernirkgqxhrfodi1mk8k8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.14 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bdc80d8e-d830-4eca-b3c5-cbfb2c6ab6fa',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.13 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.13-PM-qgf90yx4kyqxcy1yz5qop8v5844qud7g933qkijbdk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.13 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bdc80d8e-d830-4eca-b3c5-cbfb2c6ab6fa',
  //   winnerAlt: 'GoWin-Winner 2023-12-05 at 10.58.12 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-05-at-10.58.12-PM-qgf910ssymti05z8o6jxu8e2evvh9rewxcepj2gj14.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-05 at 10.58.12 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=275c85ff-6ef0-4c36-81b6-6ac44a236cf3',
  //   winnerAlt: 'GoWin-Winner 2023-12-01 at 8.13.58 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-01-at-8.13.58-PM-qg6kpfuggl7bebwqaky2s0fcms24t4682s3exnfhp4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-01 at 8.13.58 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bdc80d8e-d830-4eca-b3c5-cbfb2c6ab6fa',
  //   winnerAlt: 'GoWin-Winner 2023-12-01 at 8.13.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-01-at-8.13.56-PM-qg6kphq4u99w1jtzzlrbwzy9tjsv8idor1edw7cpco.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-01 at 8.13.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=85c2104b-4f3d-46d6-8028-6e84571dff70',
  //   winnerAlt: 'GoWin-Winner 2023-12-01 at 8.13.54 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-01-at-8.13.54-PM-qg6kolrmdw252t4f67y0k80lmg6dysutan7vkso388.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-01 at 8.13.54 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fabe5265-a2a4-445c-ba0d-603fba02f675',
  //   winnerAlt: 'GoWin-Winner 2023-12-01 at 8.13.53 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-01-at-8.13.53-PM-qg6kompgkq3fef320qcn4ps27u1r6hyjmrvd22mp20.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-01 at 8.13.53 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-12-01 at 8.13.52 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-01-at-8.13.52-PM-qg6konnark4pq11ov8r9p7jit7x4e729ywiujclavs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-12-01 at 8.13.52 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2611c100-3163-4621-8ec0-1f127de40d06',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.49 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.49-PM-qg32k0m8ewc5ekkv0iyov0v9hk5l6t1dotn8jp1kd4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.49 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.47 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.47-PM-qg32k1k2lqdfq6jhv1dbfimq2y0yei540yaq0z066w.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.47 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.46 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.46-PM-qg32k2hwskeq1si4pjry00e6obwbm78ud2y7i8ys0o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.46 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a74a6e02-53a4-4028-a08a-ce9dfc5a50bf',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.45 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.45-PM-qg32j4npyj4eftva755di8xlagj3x3ii8fgq8acy8o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.45 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=68a7a489-09ba-4acc-8c2d-b86edd4b9a95',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.43 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.43-PM-qg32j7h8j189enr6qod97q7z2m57k6tp8tf6o48rq0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.43 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fee0f545-7bd1-4a62-a84b-0eef7a410adb',
  //   winnerAlt: 'GoWin-Winner 2023-11-29 at 6.32.44 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-29-at-6.32.44-PM-qg32j6jec76z31sjw5ymn8gih89uchpyworp6ua5w8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-29 at 6.32.44 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.35 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.35-PM-qfzlgmwuytjranzoleyqcxpruqqu3hxg75pidw917c.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.35 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=589c15a5-87f8-4937-9487-e599df8f9580',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.33 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.33-PM-qfzlgosjchmbxvwyafrzhx8p1ihkiw4wvf0hcg68uw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.33 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d540eb14-4988-4d6d-9037-e4924fe2c477',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.23 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.23-PM-qfzlfp2o4s9fopcu30c5v696gvdmee742i813xn7fc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.23 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=9496975a-560a-413f-8bae-5931f4b3caf2',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.25 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.25-PM-qfzlg368zasqiuscsofkekp3dng4lur34g0bb32au0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.25 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=31c054de-2c29-4cb0-b36c-49fbd01d43f1',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.16 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.16-PM-qfzlfa193fouixyoitu4ra1sypfqz8jeofs9fi9i6w.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.16 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1948be95-5c98-4ca1-8bb3-9718e083f74d',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.15 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.15-PM-qfzlewvifr6u0ehsno5csddcnb8lzh35ymngpmt0m0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.15 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d1266634-23a8-4cf4-ac9f-d18142d3117b',
  //   winnerAlt: 'GoWin-Winner 2023-11-27 at 8.55.14 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-27-at-8.55.14-PM-qfzlegw97kkyj1508z8p3zeijrfdcmbq8fk7jxgpjs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-27 at 8.55.14 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4b0fa7c6-36b1-4ec2-96d0-e24afe198f47',
  //   winnerAlt: 'GoWin-Winner 2023-11-24 at 7.54.43 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-24-at-7.54.43-PM-qfzldalio0z20kug3yyhhs2rtf7uq8nt2m7cyh7fbs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-24 at 7.54.43 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c77d1ce0-38ea-4476-a3de-050ef79a1a06',
  //   winnerAlt: 'GoWin-Winner 2023-11-24 at 7.54.39 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-24-at-7.54.39-PM-qfzldch71p1mnsrpszrqmrlp06yl5mv9qvibx14mzc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-24 at 7.54.39 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bfd28e7a-a2ab-46a9-8294-11d833abf39c',
  //   winnerAlt: 'GoWin-Winner 2023-11-23 at 8.28.44 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-23-at-8.28.44-PM-qfsj5ymem7hm3vo0gr9ahl4jdayznji6jq4edrz80o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-23 at 8.28.44 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0f76fa00-5879-4175-a03f-6c230d87dfe6',
  //   winnerAlt: 'GoWin-Winner 2023-11-23 at 8.28.44 PM (2)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-23-at-8.28.44-PM-2-qfsj5kitroyb9q8hr35vy6omgiwhg2y7hsc46mk4m0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-23 at 8.28.44 PM (2)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bc6548b6-2c85-40b4-b85e-a07f732532d1',
  //   winnerAlt: 'GoWin-Winner 2023-11-23 at 8.28.44 PM (3)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-23-at-8.28.44-PM-3-qfsj50s7s67ahx15ycmpztnxzflryfruf2mx3tde8o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-23 at 8.28.44 PM (3)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7d9f0300-5682-47d2-94a4-8bdd54a5a891',
  //   winnerAlt: 'GoWin-Winner 2023-11-21 at 7.39.17 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-21-at-7.39.17-PM-qfsivdxrqb0hht0z7opdxr6us93c24iw3dwr0pno0o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-21 at 7.39.17 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c81f4bd4-1a2f-432e-8243-61f502f3ef0c',
  //   winnerAlt: 'GoWin-Winner 2023-11-21 at 7.39.16 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-21-at-7.39.16-PM-qfsiv2npgal1mhhd1jtv3u1bnmmxhra41u2x9e4e3c.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-21 at 7.39.16 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=df748305-a326-4fa4-8687-f9583fa94845',
  //   winnerAlt: 'GoWin-Winner 2023-11-21 at 7.39.10 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-21-at-7.39.10-PM-qfsiu7n16rekzcqf2of6bjv41wvtfquyxkjwf9edso.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-21 at 7.39.10 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bdc80d8e-d830-4eca-b3c5-cbfb2c6ab6fa',
  //   winnerAlt: 'GoWin-Winner 2023-11-20 at 10.15.00 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-20-at-10.15.00-PM-qfoqj56yl5zyociuwkkcgtzy0r73k4529u81ed5owo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-20 at 10.15.00 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-11-20 at 10.14.58 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-20-at-10.14.58-PM-qfoqivskotn3g8wifgi2rwdc2whff53qwjp6lljmmw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-20 at 10.14.58 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a10cddaf-eef9-47be-8d95-c2ab92352424',
  //   winnerAlt: 'GoWin-Winner 2023-11-20 at 10.14.57 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-20-at-10.14.57-PM-qfoqigr5nh2iahicva01o05ykqjjzzg1ih9ex65xeg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-20 at 10.14.57 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=b2868b16-ad95-4a90-8050-8c77447e77f9',
  //   winnerAlt: 'GoWin-Winner 2023-11-17 at 8.08.51 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-17-at-8.08.51-PM-qfoqi0rwfagmt45kgl3dzm74h6qbd4olsa65rgtmc8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-17 at 8.08.51 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
  //   winnerAlt: 'GoWin-Winner 2023-11-17 at 8.08.50 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-17-at-8.08.50-PM-qfoqhrdiiy3rl0j7zh14aokijc0n85naeznayp7k2g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-17 at 8.08.50 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=563e7341-20b5-4db2-ac22-0ed992b19d85',
  //   winnerAlt: 'GoWin-Winner 2023-11-16 at 6.36.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-6.36.03-PM-qfoqhbe9arhw3n6fks4gmalofs7elavuosk1szv908.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-16 at 6.36.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=69c828f0-5761-4b43-940d-b771ff39b090',
  //   winnerAlt: 'GoWin-Winner 2023-11-16 at 6.36.00 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-6.36.00-PM-qfoqgy8in2zvl3pjpmfondx84e09ljflyzf934erfc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-16 at 6.36.00 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4b0fa7c6-36b1-4ec2-96d0-e24afe198f47',
  //   winnerAlt: 'GoWin-Winner 2023-11-16 at 6.35.59 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-6.35.59-PM-qfoqgm0m68j5e67aoz5j8z08edohth33laxxuiwvo8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-16 at 6.35.59 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f2d7ee6f-dc44-443a-8509-f6ba0af0b4ee',
  //   winnerAlt: 'GoWin-Winner 2023-11-15 at 7.54.10 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-15-at-7.54.10-PM-qfoqfurao1hu1haw45dcqnvv67eum92vtk0uxi1aoo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-15 at 7.54.10 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=36f6ef1b-52de-4f94-a51d-cf06e02af4b1',
  //   winnerAlt: 'GoWin-Winner 2023-11-15 at 7.54.07 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-15-at-7.54.07-PM-qfoqflcwrp4ytdojn1b31q998cp6ha1kg9i04qf8ew.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-15 at 7.54.07 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2dd38791-57cc-4ea9-92da-7bdc07f34e2d',
  //   winnerAlt: 'GoWin-Winner 2023-11-15 at 7.54.06 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-15-at-7.54.06-PM-qfoqf950auo8mg6ame0xnbc9icdep7p22l0ow4xcns.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-15 at 7.54.06 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d1266634-23a8-4cf4-ac9f-d18142d3117b',
  //   winnerAlt: 'GoWin-Winner 2023-11-14 at 7.50.01 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-14-at-7.50.01-PM-qfoqev1fgc4xsaqrwpxj3wwclkawhr530n8eozi994.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-14 at 7.50.01 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=633e3dd9-d85f-44c9-88ee-5776359793c4',
  //   winnerAlt: 'GoWin-Winner 2023-11-14 at 7.50.00 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-14-at-7.50.00-PM-qfoqeitizho7ld8iw2ndphzcvjz4poskmyr3ge0di0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-14 at 7.50.00 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.27-PM-qfoqdvbk8ms1j46npahph5wu0x6yd97a7qfyggz7tk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3088ae6c-98d2-4e28-b2b2-f339b0667f4f',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.26 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.26-PM-qfoqcp0tp3650nw3ka7huyl3akzfqvjd1x33v0pxlk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.26 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.22 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.22-PM-qfoqcfmfsqt9sk9r365860yhcq9rlwi1omk9293vbs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.22 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=428dd380-6938-49be-b991-83e15d0ffc78',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.23 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.23-PM-1-qfoqc4cdiqdtx8q4x19pc3sy83td1j99n2qfaxkleg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.23 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cf71aae0-a5a1-46b6-91da-66581fb8f539',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.21 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.21-PM-qfoqbq8so7uj33am7d6aspd1bbquu2pal4y53s5hzs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.21 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e23d77d3-5abf-4fa9-9c96-54317b053d8f',
  //   winnerAlt: 'GoWin-Winner 2023-11-14 at 7.49.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-14-at-7.49.56-PM-qfoqd34ejlpfutbm9yawed107d1xyc3c3uve265108.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-14 at 7.49.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cfdffffd-28b3-4f6b-a2cb-2f3fbe562b8e',
  //   winnerAlt: 'GoWin-Winner 2023-11-10 at 6.18.30 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-10-at-6.18.30-PM-qfanhm8zrqapt2seodttt1oz3oi5t2wnb9txfpud08.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-10 at 6.18.30 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-11-13 at 8.43.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-13-at-8.43.18-PM-qfoqb8dv2d62yi0k3ngdzbva106vrtqe6ojwzivza0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-13 at 8.43.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=5f87997e-d982-47ff-9bb8-ae94185b7d22',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.27-PM-qfanhp2ic8ekrwob7x1piizcvu49g67ubnsdvjq6hk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=5e66997c-ac3d-4300-861e-a9b962684fd4',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.26 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.26-PM-qfanhq0cj2fv3imy2fgc30qth7zmnvbknsfvctosbc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.26 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
  //   winnerAlt: 'GoWin-Winner 2023-11-10 at 6.18.24 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-10-at-6.18.24-PM-qfanhn6tykc04or1iw8gdjgfp2dj0s0dnehewzsyu0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-10 at 6.18.24 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7e2ad17d-e95e-4b74-9ad6-2599c1c43686',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.28-PM-qfanho4o5edagapoden2y17wag8w8h43zj4we9rkns.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=69c828f0-5761-4b43-940d-b771ff39b090',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.25 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.25-PM-qfanhq0cj2fv3imy2fgc30qth7zmnvbknsfvctosbc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.25 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=ae04fae2-16d6-4029-a3e6-4749d5272427',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.23 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.23-PM-1-qfanhqy6pwh5f4lkwxuyniia2luzvkfazx3cu3ne54.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.23 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7e2ad17d-e95e-4b74-9ad6-2599c1c43686',
  //   winnerAlt: 'GoWin-Winner 2023-11-09 at 6.22.23 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-09-at-6.22.23-PM-qfanhrw0wqifqqk7rg9l809qnzqd39j1c1qubdlzyw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-09 at 6.22.23 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=85c2104b-4f3d-46d6-8028-6e84571dff70',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.58 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.58-PM-qeyvockcbe8vlytneufyqnysubn3cfltyswgd1y4wo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.58 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cf71aae0-a5a1-46b6-91da-66581fb8f539',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.55 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.55-PM-qeyvobmi4k7lacv0kc1c667c8xrq4qi3mo8yvrzj2w.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.55 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=85c2104b-4f3d-46d6-8028-6e84571dff70',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.54 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.54-PM-qeyvnrvw51gkijnorli67t6nruh0n3bqjyjrsysspk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.54 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2eff46e3-ca69-42a4-b81a-5e20e49fcaae',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.53 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.53-PM-qeyvnstqbvhuu5mbm3wssay4d8cdusfgw379a8rejc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.53 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.52 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.52-PM-1-qeyvn3g37cj44on6qaxvezcobtth2ympsll5brt17c.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.52 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e77fb686-0d11-47b8-a245-dc9f30023454',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.52 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.52-PM-qeyvmknbentdohehs2tc143gg4e4t0k320jfq8kwns.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.52 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.48 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.48-PM-1-qeyvlribisphokkti87wdtg616dr6ecem0bduns40o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.48 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=74bf9077-5758-4d47-8205-67dbe9493300',
  //   winnerAlt: 'GoWin-Winner 2023-11-06 at 7.31.48 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-06-at-7.31.48-PM-qeyvlsg5pmqs06jgcqmiyb7mmk94e3g4y4yvbxqpug.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-06 at 7.31.48 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=68a7a489-09ba-4acc-8c2d-b86edd4b9a95',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.50 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.50-PM-qeto4lupcnmcke3sud8ykfzu4q49gvnpos69t4tn4o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.50 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=dd4f63dd-5b1a-400d-bd70-93ce5e8603b3',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.41 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.41-PM-qeto4lupcnmcke3sud8ykfzu4q49gvnpos69t4tn4o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.41 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=5499a56f-d5ef-4552-994b-022df5ffb136',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.36 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.36-PM-1-qeto4nqdqbox7m12je27pfirbhuzw9v6d1h8roqus8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.36 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=77f8983d-1cfd-45d4-833c-8926fc2cd956',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.40 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.40-PM-qeto4msjjhnmw02fovnl4xraq3zmokrg0wtraes8yg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.40 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bcd2195a-29ac-40d1-a2cb-133841dd1344',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.36 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.36-PM-qeto4oo7x5q7j7zpdwgu9xa7wvqd3yywp64q8ypgm0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.36 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=54cc759a-7c0b-4d13-9bfc-a8eae33fb829',
  //   winnerAlt: 'GoWin-Winner 2023-11-01 at 11.07.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-01-at-11.07.20-PM-qeto4kwv5tl28s55zuubzy8djc8w96jzcnisbuv1aw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-01 at 11.07.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=0f76fa00-5879-4175-a03f-6c230d87dfe6',
  //   winnerAlt: 'GoWin-Winner 2023-10-31 at 10.34.09 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-31-at-10.34.09-PM-qeon6uvysssf4hotk9id7nze29k3ifiygpuwmctnx4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-31 at 10.34.09 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3644a11b-e00d-45db-b613-8a4dd74eb55a',
  //   winnerAlt: 'GoWin-Winner 2023-11-02 at 10.42.34 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-10.42.34-PM-qeto4pm23zrhutyc8evguf1oi9lqbo2n1as7q8o2fs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-11-02 at 10.42.34 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4ea2af28-c0a3-4599-b815-1a43a9b26e65',
  //   winnerAlt: 'GoWin-Winner 2023-10-30 at 9.30.52 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-30-at-9.30.52-PM-qeon6wrn6guzrpm39abmcnib91atxtqf4z5vkwqvko.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-30 at 9.30.52 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=353b3b59-11e7-4635-b162-2323753333b9',
  //   winnerAlt: 'GoWin-Winner 2023-10-31 at 10.33.49 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-31-at-10.33.49-PM-qeon6vtszmtpg3ngerwzs5qunnfgq4mosuie3ms9qw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-31 at 10.33.49 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-10-30 at 9.30.50 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-30-at-9.30.50-PM-qeon6wrn6guzrpm39abmcnib91atxtqf4z5vkwqvko.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-30 at 9.30.50 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d10b2f25-5005-4066-80d8-27803c6a5338',
  //   winnerAlt: 'GoWin-Winner 2023-10-27 at 8.30.30 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-27-at-8.30.30-PM-qehm4lgzddj0ieup3axbnlx818vlrmf3x3ypxwp6qg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-27 at 8.30.30 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=ae04fae2-16d6-4029-a3e6-4749d5272427',
  //   winnerAlt: 'GoWin-Winner 2023-10-27 at 8.30.23 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-27-at-8.30.23-PM-1-qehm4metk7kau0tbxtby83oommqyzbiu98m7f6nsk8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-27 at 8.30.23 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=40ae7319-e9b2-4d3d-8615-a7f13e89e64f',
  //   winnerAlt: 'GoWin-Winner 2023-10-27 at 8.30.23 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-27-at-8.30.23-PM-qehm4ncnr1ll5mrysbqkslg580mc70mkld9owgmee0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-27 at 8.30.23 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a23f3184-1f82-4fb5-9a1f-8afdea3c246c',
  //   winnerAlt: 'GoWin-Winner 2023-10-27 at 8.30.19 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-27-at-8.30.19-PM-qehm4kj56jhq6sw28sip345rfv08jxbdkzb8gmqkwo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-27 at 8.30.19 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=eb6f0fd2-336d-4670-a40d-4df5e7e3912b',
  //   winnerAlt: 'GoWin-Winner 2023-10-27 at 8.30.17 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-27-at-8.30.17-PM-qehm4ncnr1ll5mrysbqkslg580mc70mkld9owgmee0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-27 at 8.30.17 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=69c828f0-5761-4b43-940d-b771ff39b090',
  //   winnerAlt: 'GoWin-Winner 2023-10-25 at 6.12.32 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-25-at-6.12.32-PM-qehfow96pkcimres25e012ssjywedkl22arx8g8sig.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-25 at 6.12.32 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=09c5cd0f-cb21-4db5-a81b-81608ead6564',
  //   winnerAlt: 'GoWin-Winner 2023-10-25 at 6.12.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-25-at-6.12.27-PM-qehfow96pkcimres25e012ssjywedkl22arx8g8sig.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-25 at 6.12.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=b2305cb3-dfa8-4a7f-a788-d4c6dc7097ed',
  //   winnerAlt: 'GoWin-Winner 2023-10-23 at 10.06.29 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-23-at-10.06.29-PM-qedjuswaiz1xctpmmmv6pww4j9azagl09umugecehk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-23 at 10.06.29 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f43bc706-7c13-4363-9106-ba835b9f6a76',
  //   winnerAlt: 'GoWin-Winner 2023-10-23 at 10.06.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-23-at-10.06.27-PM-qedjur0m5azcplscxm1xkxd7chk8v2djllbvhuf6u0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-23 at 10.06.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=32dd85c6-5363-4876-9a8b-be410a4d1af7',
  //   winnerAlt: 'GoWin-Winner 2023-10-23 at 10.06.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-23-at-10.06.28-PM-qedjuq2rygy2dztq33nb0flqr3ovnd9t9goe0kgl08.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-23 at 10.06.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=275c85ff-6ef0-4c36-81b6-6ac44a236cf3',
  //   winnerAlt: 'GoWin-Winner 2023-10-25 at 6.12.22 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-25-at-6.12.22-PM-qehfovbciqb8b5g57mzdgl1byl115vhbq64fr6a6oo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-25 at 6.12.22 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-10-23 at 10.06.26 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-23-at-10.06.26-PM-qedjurygc50n17qzs4gk5f4nxvfm2rh9xpzcz4dsns.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-23 at 10.06.26 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1bace571-872a-435d-b68d-97d9d0799a3f',
  //   winnerAlt: 'GoWin-Winner 2023-10-24 at 9.42.23 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-24-at-9.42.23-PM-qedk4dv27665ppsjo9z9mzuajo2ordmhxa21ky4x20.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-24 at 9.42.23 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f2d7ee6f-dc44-443a-8509-f6ba0af0b4ee',
  //   winnerAlt: 'GoWin-Winner 2023-10-23 at 10.06.25 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-23-at-10.06.25-PM-qedjur0m5azcplscxm1xkxd7chk8v2djllbvhuf6u0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-23 at 10.06.25 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3a2c5016-907c-4a1f-a8db-cc6e099dc643',
  //   winnerAlt: 'GoWin-Winner 2023-10-20 at 6.55.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-20-at-6.55.20-PM-qe5fn92icskxpvy2f01x9zhfdwtxwlp2awpxpxscbc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-20 at 6.55.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4b0fa7c6-36b1-4ec2-96d0-e24afe198f47',
  //   winnerAlt: 'GoWin-Winner 2023-10-20 at 6.55.16 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-20-at-6.55.16-PM-qe5fna0cjmm81hwp9igjuh8vzapb4assn1df77qy54.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-20 at 6.55.16 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=65819082-c850-4f7b-8f25-df43a5372dce',
  //   winnerAlt: 'GoWin-Winner 2023-10-19 at 4.58.21 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-19-at-4.58.21-PM-qe3g6xyngna9i8d8w3ums3k03jevbnt5b5w83rrw48.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-19 at 4.58.21 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-10-20 at 6.55.15 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-20-at-6.55.15-PM-qe5fnay6qgnid3vc40v6ez0ckokobzwiz60wohpjyw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-20 at 6.55.15 PM',
  // },
  // {
  //   winnerAlt: 'GoWin-Winner 2023-10-18 at 6.07.19 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-18-at-6.07.19-PM-qe1sdoalclmf4e3zgueucyvai2ll92hdlh25jeg40o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-18 at 6.07.19 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e93cf6d8-2333-4b31-afd8-30f67ef7556f',
  //   winnerAlt: 'GoWin-Winner 2023-10-19 at 4.58.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-19-at-4.58.20-PM-qe3g6ywhnhbjtubvqm99clbgoxa8jcwvnajpl1qhy0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-19 at 4.58.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=6764dbf7-133c-4bde-9de2-6f2e3ca5e57e',
  //   winnerAlt: 'GoWin-Winner 2023-10-18 at 6.07.18 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-18-at-6.07.18-PM-1-qe1sdp8fjfnpg02mbctgxgmr3ggygrl3xlpn0oepug.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-18 at 6.07.18 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-10-18 at 6.07.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-18-at-6.07.18-PM-qe1sdq69q9ozrm195v83hye7oucbogou9qd4hydbo8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-18 at 6.07.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=68a7a489-09ba-4acc-8c2d-b86edd4b9a95',
  //   winnerAlt: 'GoWin-Winner 2023-10-17 at 8.14.17 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-17-at-8.14.17-PM-qe07eitbplr01hiur80ybkic6kguepjtl7o2w7ply0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-17 at 8.14.17 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-10-18 at 6.07.12 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-18-at-6.07.12-PM-qe1sdr43x3qa37zw0dmq2g5oa87ow5sklv0lz8bxi0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-18 at 6.07.12 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=de6251d7-7988-4347-ac02-152b838097c4',
  //   winnerAlt: 'GoWin-Winner 2023-10-16 at 8.39.54 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-16-at-8.39.54-PM-qdygf4kpspuu031ir4mvnqlu1w66r45b6nanndlnbs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-16 at 8.39.54 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=659f1090-4e06-412f-80f2-832c8389f374',
  //   winnerAlt: 'GoWin-Winner 2023-10-18 at 6.07.11 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-18-at-6.07.11-PM-qe1sdr43x3qa37zw0dmq2g5oa87ow5sklv0lz8bxi0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-18 at 6.07.11 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7e2ad17d-e95e-4b74-9ad6-2599c1c43686',
  //   winnerAlt: 'GoWin-Winner 2023-10-17 at 8.14.15 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-17-at-8.14.15-PM-qe07ejr5wfsad3hhlqfkw29sryc7menjxcbkdho7rs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-17 at 8.14.15 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f47c14b9-da0b-4c4d-a097-c78edc806b56',
  //   winnerAlt: 'GoWin-Winner 2023-10-16 at 8.39.29 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-16-at-8.39.29-PM-qdygf1r787qz195m7lezy9bg9qk340u469c77jptug.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-16 at 8.39.29 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f48aba90-2358-4676-ba72-ad1f6effe2ff',
  //   winnerAlt: 'GoWin-Winner 2023-10-16 at 8.39.30 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-16-at-8.39.30-PM-qdygf1r787qz195m7lezy9bg9qk340u469c77jptug.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-16 at 8.39.30 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=390df253-9746-4686-b809-f378d5440914',
  //   winnerAlt: 'GoWin-Winner 2023-10-16 at 8.39.28 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-16-at-8.39.28-PM-qdygf2p1f1s9cv4923tmir2wv4fgbpxuidzootofo8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-16 at 8.39.28 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7e2ad17d-e95e-4b74-9ad6-2599c1c43686',
  //   winnerAlt: 'GoWin-Winner 2023-10-17 at 8.14.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-17-at-8.14.08-PM-qe07ekp039tkopg4g8u7gk19dc7ku3ra9gz1urmtlk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-17 at 8.14.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fabe5265-a2a4-445c-ba0d-603fba02f675',
  //   winnerAlt: 'GoWin-Winner 2023-10-13 at 8.29.12 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-13-at-8.29.12-PM-qdt6p8k4mu93plu5iddhoqk9e1trxgykhu07qacguw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-13 at 8.29.12 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=09c5cd0f-cb21-4db5-a81b-81608ead6564',
  //   winnerAlt: 'GoWin-Winner 2023-10-16 at 8.39.26 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-16-at-8.39.26-PM-qdygf3mvlvtjoh2vwm8938udgiatjf1kuin663n1i0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-16 at 8.39.26 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c81f4bd4-1a2f-432e-8243-61f502f3ef0c',
  //   winnerAlt: 'GoWin-Winner 2023-10-12 at 8.20.04 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-12-at-8.20.04-PM-qdrf0tu4uo48protkgqto7w668thfu97bgnmqdbntk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-12 at 8.20.04 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c27bc801-c309-4c88-84fa-5ade59b5754a',
  //   winnerAlt: 'GoWin-Winner 2023-10-13 at 8.29.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-13-at-8.29.08-PM-qdt6p9hytoae17sscvs498bpzfp5562atynp7kb2oo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-13 at 8.29.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c55845ee-2148-4032-b72b-0222c9312119',
  //   winnerAlt: 'GoWin-Winner 2023-10-11 at 8.08.57 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-11-at-8.08.57-PM-qdpodxu7vfcf5l1hj9z1oqdgl4vn79i4asrsd2o4ew.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-11 at 8.08.57 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7392af82-facc-4edc-af4a-d676ce6af073',
  //   winnerAlt: 'GoWin-Winner 2023-10-11 at 8.08.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-11-at-8.08.56-PM-qdpodys229dph704dsdo984x6ir0eylumxf9ucmq8o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-11 at 8.08.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a91613e5-ee1f-479e-b1d6-4c5583f1d9f2',
  //   winnerAlt: 'GoWin-Winner 2023-10-10 at 6.48.00 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-10-at-6.48.00-PM-qdo0x4j6bcqclqoydwcasyjmcgog4ambar4bpovjvc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-10 at 6.48.00 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bc6548b6-2c85-40b4-b85e-a07f732532d1',
  //   winnerAlt: 'GoWin-Winner 2023-10-11 at 8.08.55 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-11-at-8.08.55-PM-qdpodzpw93ezssyr8asatpwdrwmdmnpkz22rbmlc2g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-11 at 8.08.55 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=69c828f0-5761-4b43-940d-b771ff39b090',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.10 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.10-PM-qdma0e63rkhfgkcctye67gg4t3989tsf9daff2tfmg.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.10 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=ab6e37e2-05be-4d0c-93b7-9d61beada737',
  //   winnerAlt: 'GoWin-Winner 2023-10-10 at 6.47.59 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-10-at-6.47.59-PM-qdo0x4j6bcqclqoydwcasyjmcgog4ambar4bpovjvc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-10 at 6.47.59 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=40ae7319-e9b2-4d3d-8615-a7f13e89e64f',
  //   winnerAlt: 'GoWin-Winner 2023-10-10 at 6.47.58 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-10-at-6.47.58-PM-1-qdo0x5h0i6rmxcnl8eqxdgb2xujtbzq1mvrt6yu5p4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-10 at 6.47.58 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f43bc706-7c13-4363-9106-ba835b9f6a76',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.08-PM-qdma0f3xyeips6azogssry7leh4lhiw5lhxwwcs1g8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=4eaa44b5-8f2d-4fbe-bbfe-b68a6d2d89c3',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.07 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.07-PM-qdma0g1s58k03s9miz7fcfz1zuzyp7zvxmledmqna0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.07 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=df748305-a326-4fa4-8687-f9583fa94845',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.06 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.06-PM-qdma0gzmc2lafe89dhm1wxqil8vbwx3m9r8vuwp93s.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.06 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e23d77d3-5abf-4fa9-9c96-54317b053d8f',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.05 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.05-PM-qdma0jt4wkp5e845x0txmf0wdehfk0eta57caql2l4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.05 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.03-PM-qdma0hxgiwmkr06w800ohfhz6mqp4m7clvwdc6nuxk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=ae04fae2-16d6-4029-a3e6-4749d5272427',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.02 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.02-PM-qdma0ivapqnv2m5j2ifb1x9fs0m2cbb2y0jutgmgrc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.02 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bcd2195a-29ac-40d1-a2cb-133841dd1344',
  //   winnerAlt: 'GoWin-Winner 2023-10-09 at 8.19.03 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-09-at-8.19.03-PM-1-qdma0gzmc2lafe89dhm1wxqil8vbwx3m9r8vuwp93s.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-09 at 8.19.03 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=67896107-0c99-4028-9347-031dfd1c531c',
  //   winnerAlt: 'GoWin-Winner 2023-10-06 at 6.41.41 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-06-at-6.41.41-PM-qdh26e1w6xt7o8j36jisbbp0n2b5d83skk6f9ewnrs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-06 at 6.41.41 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7392af82-facc-4edc-af4a-d676ce6af073',
  //   winnerAlt: 'GoWin-Winner 2023-10-06 at 6.41.39 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-06-at-6.41.39-PM-qdma0d89kqg54ydpzfzjmyoo7pdv24oox8mxxsutso.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-06 at 6.41.39 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=d540eb14-4988-4d6d-9037-e4924fe2c477',
  //   winnerAlt: 'GoWin-Winner 2023-10-04 at 4.33.44 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-04-at-4.33.44-PM-qddkhd4bd7e47lds5kp3w76ejtl40u2drrf6987hw8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-04 at 4.33.44 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=51760292-6e17-4c23-a075-9d04674adab4',
  //   winnerAlt: 'GoWin-Winner 2023-10-04 at 4.33.44 PM (1)',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-04-at-4.33.44-PM-1-qddkhc6h6dctvzf5b2ahbpexyfpqt4ynfmrory8w2g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-04 at 4.33.44 PM (1)',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-10-02 at 9.30.39 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-02-at-9.30.39-PM-qda370g18d25zsx5fy7redcub4jcuca4blasyjr2vs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-02 at 9.30.39 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3a2c5016-907c-4a1f-a8db-cc6e099dc643',
  //   winnerAlt: 'GoWin-Winner 2023-10-02 at 9.30.36 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-02-at-9.30.36-PM-qda3a66i7bdv0mbxztdma2nm6qyrpptn388k112fyw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-02 at 9.30.36 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1948be95-5c98-4ca1-8bb3-9718e083f74d',
  //   winnerAlt: 'GoWin-Winner 2023-10-02 at 9.30.30 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-10-02-at-9.30.30-PM-qda3a74ce5f5c8akubs8ukf2s4u4xexdfcw1ib11so.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-10-02 at 9.30.30 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=c549af65-96be-43bd-b3d6-8a503783fd10',
  //   winnerAlt: 'GoWin-Winner 2023-09-29 at 8.13.42 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-29-at-8.13.42-PM-qd6fr39c3fez12aujjuc5gdp2nkt8cvnqr415rtil4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-29 at 8.13.42 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=1e5bdf21-8634-45cd-8e2a-8e612ec4aed5',
  //   winnerAlt: 'GoWin-Winner 2023-09-28 at 3.02.19 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-28-at-3.02.19-PM-qd6fr2bhwldopgc7p1fpkym8h9pg0nrxemgjohuwrc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-28 at 3.02.19 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cb7429ec-2ce9-41a9-ac93-eba1342fa9a5',
  //   winnerAlt: 'GoWin-Winner 2023-09-25 at 8.35.29 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-25-at-8.35.29-PM-qcxumgydgx6aeb8pv56tjq1iu34l7114d77mloc28o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-25 at 8.35.29 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=390df253-9746-4686-b809-f378d5440914',
  //   winnerAlt: 'GoWin-Winner 2023-09-25 at 8.35.20 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-25-at-8.35.20-PM-qcxujnfsytbbkfc6bxb42fnqoh0y3pu3z8r6rsikwo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-25 at 8.35.20 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cb7429ec-2ce9-41a9-ac93-eba1342fa9a5',
  //   winnerAlt: 'GoWin-Winner 2023-09-21 at 8.33.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-21-at-8.33.56-PM-qcqve16imu0qt6sk14w93k0edg0fh68l7dyirsm3bs.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-21 at 8.33.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=85062ccd-6d16-4881-a26a-64a18089a7fb',
  //   winnerAlt: 'GoWin-Winner 2023-09-20 at 8.37.03 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-20-at-8.37.03-PM-qcp7dx8qs6zrxih0jx07j5gx50wzdvr57u78gxfgig.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-20 at 8.37.03 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=6e4a1d00-1968-42f1-8fca-5e7a914a1569',
  //   winnerAlt: 'GoWin-Winner 2023-09-20 at 8.36.59 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-20-at-8.36.59-PM-qcp7duf87ovwyol40dsbto6jcvavqsfy7g8s13jn14.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-20 at 8.36.59 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=3644a11b-e00d-45db-b613-8a4dd74eb55a',
  //   winnerAlt: 'GoWin-Winner 2023-09-19 at 5.31.02 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-19-at-5.31.02-PM-qcn8ncxr2oxtpdhyp5f2brnzkkltmi2kfima1l8tw8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-19 at 5.31.02 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=00fa7d47-74e4-4330-bde1-d808c4e61bfa',
  //   winnerAlt: 'GoWin-Winner 2023-09-18 at 9.45.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-18-at-9.45.08-PM-qclqgqb4buoc96w8zzaty03oaj07yu7lksvl1pgme0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-18 at 9.45.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=8cd3be10-b15b-4ee6-b4f7-6e6ecae98c80',
  //   winnerAlt: 'GoWin-Winner 2023-09-18 at 9.37.56 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-18-at-9.37.56-PM-qclqel8crfqtt607i1zf9jjvkxk4fnply7drp0mwk8.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-18 at 9.37.56 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=fabe5265-a2a4-445c-ba0d-603fba02f675',
  //   winnerAlt: 'GoWin-Winner 2023-09-14 at 7.04.46 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-14-at-7.04.46-PM-qcer2pdsv7vfnik9sk23o8twpffihr8ibc0kim0wgo.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-14 at 7.04.46 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-09-13 at 6.03.27 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-13-at-6.03.27-PM-qcd0jqdod4gmgu84w28d2rqc846qbs15u1zk4tkb4o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-13 at 6.03.27 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a4c88731-22fb-43fa-bac5-4e3095d3056b',
  //   winnerAlt: 'GoWin-Winner 2023-09-12 at 6.32.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-12-at-6.32.08-PM-qcb971p7tkdi9x1rhq16nsk7qbe8u8v9xpjzm55qhk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-12 at 6.32.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=7e1fc605-b8c1-46a9-8811-de4a4be599b1',
  //   winnerAlt: 'GoWin-Winner 2023-09-11 at 7.47.52 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-11-at-7.47.52-PM-qc9f5tzffi5bsm32r5q9ooaz30drvphqflabvhvmu0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-11 at 7.47.52 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=df748305-a326-4fa4-8687-f9583fa94845',
  //   winnerAlt: 'GoWin-Winner 2023-09-11 at 7.47.51 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-11-at-7.47.51-PM-qc9f5tzffi5bsm32r5q9ooaz30drvphqflabvhvmu0.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-11 at 7.47.51 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=31a54661-8f3b-4589-9d49-301b482276b4',
  //   winnerAlt: 'GoWin-Winner 2023-09-08 at 7.21.52 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-08-at-7.21.52-PM-qc4b4us85f1whv8gyz4z9yqwf41z2nsfwzui9ysrx4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-08 at 7.21.52 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=43575199-6157-4394-bce8-f74f84d20245',
  //   winnerAlt: 'GoWin-Winner 2023-09-06 at 8.31.09 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-06-at-8.31.09-PM-qc20pnpa2x6mrp95be039q64x8zmre83aqhaiyahqw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-06 at 8.31.09 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=b2305cb3-dfa8-4a7f-a788-d4c6dc7097ed',
  //   winnerAlt: 'GoWin-Winner 2023-09-05 at 7.10.43 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-05-at-7.10.43-PM-qc20pmrfw35cg3aigvlgp8eobv49jp4cyltt1obvx4.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-05 at 7.10.43 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=b193619f-03de-471b-be41-5e583c583aa9',
  //   winnerAlt: 'GoWin-Winner 2023-09-04 at 8.31.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-04-at-8.31.18-PM-qbxccbg2xfnzb9otaca7ia9hq4kckh4fxvw3pli1qw.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-04 at 8.31.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a8bec8ea-9afd-4739-9b8f-6408685d8812',
  //   winnerAlt: 'GoWin-Winner 2023-09-04 at 8.31.14 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-04-at-8.31.14-PM-qbxcccdx49p9mvng4uou2s0ybifps686a0jl6vgnko.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-04 at 8.31.14 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f43bc706-7c13-4363-9106-ba835b9f6a76',
  //   winnerAlt: 'GoWin-Winner 2023-09-01 at 7.51.49 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-09-01-at-7.51.49-PM-qbs3ys8lcq9aam8tohhvt2xl7vvpq9wl8eswkyjr6g.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-09-01 at 7.51.49 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=e5b00dbc-ea81-40b4-bcf7-730cac0a57b6',
  //   winnerAlt: 'GoWin-Winner 2023-08-31 at 6.15.09 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-31-at-6.15.09-PM-qbs3yrar5w7zz0a6tz398l64mi0ciksuwa5f3ol5co.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-31 at 6.15.09 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=f48aba90-2358-4676-ba72-ad1f6effe2ff',
  //   winnerAlt: 'GoWin-Winner 2023-08-30 at 7.18.08 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-30-at-7.18.08-PM-qboigbcl73ot6mqp83w2sn0k4cliv684vbxpc7mz4o.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-30 at 7.18.08 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-08-29 at 6.36.18 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-29-at-6.36.18-PM-qbmrynce6q2c4giap6donu21cax3e27d8iiyy98p5k.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-29 at 6.36.18 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=211ed6c5-239a-4d94-8c17-98497f5dadeb',
  //   winnerAlt: 'GoWin-Winner 2023-08-28 at 8.32.30 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-28-at-8.32.30-PM-qbl66a1q44725wczlfc9mb4aamsmaea67n4kaftqhk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-28 at 8.32.30 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=94d218ef-50b2-4494-ad11-a26926e60568',
  //   winnerAlt: 'GoWin-Winner 2023-08-28 at 7.31.22 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-28-at-7.31.22-PM-qbl6693vxa5ruaecqwxn1tctp8x92p6fvih2t5v4ns.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-28 at 7.31.22 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cea10a2f-3b49-429f-9b9b-07b60109ae79',
  //   winnerAlt: 'GoWin-Winner 2023-08-28 at 7.26.24 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-28-at-7.26.24-PM-qbl66a1q44725wczlfc9mb4aamsmaea67n4kaftqhk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-28 at 7.26.24 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=03dae694-512b-45dd-9145-85e82781bed3',
  //   winnerAlt: 'GoWin-Winner 2023-08-25 at 8.37.50 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-25-at-8.37.50-PM-qbfvotfkh6ujb77fcr0ui9jybwclodmvqcxdl5gajc.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-25 at 8.37.50 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=a23f3184-1f82-4fb5-9a1f-8afdea3c246c',
  //   winnerAlt: 'GoWin-Winner 2023-08-23 at 7.26.44 PM',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-23-at-7.26.44-PM-qbcbdtkuepsh5yk01nwvbcpeawsjtbjicg9me430pk.jpeg',
  //   orginalImageAlt: 'WhatsApp Image 2023-08-23 at 7.26.44 PM',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=bcd2195a-29ac-40d1-a2cb-133841dd1344',
  //   winnerAlt:
  //     'FUN4 AUGUST 21 2023 AED 30,000 Ashrafulzzaman Jisad SHIFA LULU GROCERY INTERNATIONAL CITY-01',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/FUN4-AUGUST-21-2023-AED-30000-Ashrafulzzaman-Jisad-SHIFA-LULU-GROCERY-INTERNATIONAL-CITY-01-scaled-qbbz7qwp8e3m8evs3ayc8wdnk406fmf1g6p0hlmcm0.jpg',
  //   orginalImageAlt:
  //     'FUN4 AUGUST 21 2023 AED 30,000 Ashrafulzzaman Jisad SHIFA LULU GROCERY INTERNATIONAL CITY-01',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=2b6bfe70-15b3-4874-8050-9a3ab743b75c',
  //   winnerAlt:
  //     'FUN4 AUGUST 20 2023 AED 30,000 Sandeep Kumar Sudarshan MUBRAK ALMADINA GRO SONAPOOR-01',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/FUN4-AUGUST-20-2023-AED-30000-Sandeep-Kumar-Sudarshan-MUBRAK-ALMADINA-GRO-SONAPOOR-01-scaled-qb8x3bvuih417bf4i5vcft100y42wgyeq542lhp9p4.jpg',
  //   orginalImageAlt:
  //     'FUN4 AUGUST 20 2023 AED 30,000 Sandeep Kumar Sudarshan MUBRAK ALMADINA GRO SONAPOOR-01',
  // },
  // {
  //   winnerImage:
  //     'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/winnersGoWin%2Fundefined?alt=media&token=cb7429ec-2ce9-41a9-ac93-eba1342fa9a5',
  //   winnerAlt:
  //     'FUN4 AUGUST 18 2023 AED 30,000 Md Hasnat Hossain Rimon MOHAMMED SUJA MOBILE INTERNATIONAL CITY-01',
  //   orginalImage:
  //     'https://gowin.ae/wp-content/uploads/elementor/thumbs/FUN4-AUGUST-18-2023-AED-30000-Md-Hasnat-Hossain-Rimon-MOHAMMED-SUJA-MOBILE-INTERNATIONAL-CITY-01-scaled-qb8x30ls8golbzvic0ztlvvgwbnoc3pmola8u65zrs.jpg',
  //   orginalImageAlt:
  //     'FUN4 AUGUST 18 2023 AED 30,000 Md Hasnat Hossain Rimon MOHAMMED SUJA MOBILE INTERNATIONAL CITY-01',
  // },
];
