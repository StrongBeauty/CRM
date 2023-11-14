import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/MainPage';
import { AddressPageLazy } from 'pages/AddressPage/AddressPageLazy';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ADDRESS = 'address',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ADDRESS]: '/address',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ADDRESS]: {
    path: RoutePath.address,
    element: <AddressPageLazy />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
