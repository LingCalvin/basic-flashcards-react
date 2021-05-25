import { LinearProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';

interface LazyLoadingFallbackPageProps {
  delay?: number;
}

export default function LazyLoadingFallbackPage({
  delay = 300,
}: LazyLoadingFallbackPageProps) {
  const [showProgress, setShowProgress] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return showProgress ? <LinearProgress color="secondary" /> : <></>;
}
