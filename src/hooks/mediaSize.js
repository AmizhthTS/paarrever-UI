import { useMediaQuery, useTheme } from '@mui/material';

function useMediaSize() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  if (isXs) return 'xs';
  else if (isSm) return 'sm';
  else if (isMd) return 'md';
  else if (isLg) return 'lg';
  else if (isXl) return 'xl';
  return 'Unknown';
}

export default useMediaSize;
