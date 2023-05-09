import { faCalendar, faCheckToSlot, faHouse } from '@fortawesome/free-solid-svg-icons';

import { NavbarMenu } from 'src/components/common';

export const NAVBAR_MENU: NavbarMenu[] = [
  // {
  //   to: '/prediction',
  //   icon: faCheckToSlot,
  //   text: '예측',
  // },
  {
    to: '/',
    icon: faHouse,
    text: '홈',
  },
  // {
  //   to: '/schedule',
  //   icon: faCalendar,
  //   text: '일정',
  // },
];
