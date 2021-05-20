import { useMediaQuery, useTheme } from '@material-ui/core';

export default function useIsMobile() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('xs'));
  return match;
}
