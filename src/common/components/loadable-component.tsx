import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import useStyles from './loadable-component.styles';

interface LoadableComponentProps {
  loading?: boolean;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LoadableComponent({
  loading,
  children,
  className,
  delay = 300,
}: LoadableComponentProps) {
  const classes = useStyles();

  const [showProgress, setShowProgress] = useState(delay <= 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowProgress(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return loading ? (
    <div className={clsx(classes.root, className)}>
      {showProgress && <CircularProgress />}
    </div>
  ) : (
    <>{children}</>
  );
}
