import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import { ReactNode } from 'react';
import useStyles from './loadable-component.styles';

interface LoadableComponentProps {
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

export default function LoadableComponent({
  loading,
  children,
  className,
}: LoadableComponentProps) {
  const classes = useStyles();

  return loading ? (
    <div className={clsx(classes.root, className)}>
      <CircularProgress />
    </div>
  ) : (
    <>{children}</>
  );
}
