import { SVGProps, VFC } from 'react';
import home from 'assetes/svg/home.svg';
import search from 'assetes/svg/search_black.svg';
import table from 'assetes/svg/table.svg';
import calendar from 'assetes/svg/calendar.svg';
import map from 'assetes/svg/pointer.svg';
import widget from 'assetes/svg/widget.svg';
import settings from 'assetes/svg/settings.svg';
import user from 'assetes/svg/user.svg';
import finance from 'assetes/svg/finance.svg';
import exit from 'assetes/svg/exit.svg';
import { RoutePath } from 'routing/routeConfig';

export type SidebarItemType = {
  path?: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  sidebarItemsList?: Omit<SidebarItemType, 'sidebarItemsList'>[];
};

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: home,
    text: 'Главная',
  },
  {
    path: RoutePath.address,
    Icon: search,
    text: 'Поиск адресов',
  },
  {
    Icon: table,
    text: 'Таблицы',
  },
  {
    Icon: calendar,
    text: 'Календарь',
  },
  {
    Icon: map,
    text: 'Карты',
  },
  {
    Icon: widget,
    text: 'Виджеты',
  },
  {
    Icon: settings,
    text: 'Настройки',
    sidebarItemsList: [
      {
        Icon: user,
        text: 'Настройки профиля',
      },
      {
        Icon: finance,
        text: 'Управление финансами',
      },
    ],
  },
  {
    Icon: exit,
    text: 'Выход',
  },
];
