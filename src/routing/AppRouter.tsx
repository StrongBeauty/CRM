import { Route, RouteProps, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { routeConfig } from './routeConfig';
import { Loader } from 'components/common/Loader/Loader';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
