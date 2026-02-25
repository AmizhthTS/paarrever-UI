import clsx from 'clsx';
import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavButton = ({ to, label, style }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Button
      component={RouterLink}
      to={to}
      className={clsx({ active: isActive })}
      sx={style}
    >
      {label}
    </Button>
  );
};

export default NavButton;
