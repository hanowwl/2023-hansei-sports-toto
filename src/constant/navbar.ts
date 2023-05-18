import { faCalendar, faCheckToSlot, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { NavbarMenu } from 'src/components/common';

export const NAVBAR_MENU: NavbarMenu[] = [
  {
    to: '/prediction',
    icon: faCheckToSlot,
    text: '승부예측',
  },
  {
    to: '/schedule',
    icon: faCalendar,
    text: '예선 일정',
  },
  {
    to: '/schedule/final',
    icon: faTrophy,
    text: '결승 일정',
  },
];
