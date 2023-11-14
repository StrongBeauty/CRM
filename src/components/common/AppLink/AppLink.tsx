import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type AppLinkProps = {
  className?: string;
  children: ReactNode;
} & LinkProps;

export const AppLink = memo(({ className, to, children, ...otherProps }: AppLinkProps) => (
  <Link to={to} className={className} {...otherProps}>
    {children}
  </Link>
));
