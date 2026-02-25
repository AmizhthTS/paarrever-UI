import { Switch, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import getStyles from './styles';

const MuiSwitch = ({
  control,
  color,
  name,
  validate,
  checked,
  onChange,
  requiredMsg,
  label,
  labelStyle,
  labelMandatory
}) => {
  const { lableCss = {}, textDanger = {} } = getStyles();
  return (
    <>
      {label && (
        <Typography sx={labelStyle ? labelStyle : lableCss}>
          {label} {labelMandatory && <span style={textDanger}>*</span>}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: requiredMsg,
          validate: validate
        }}
        render={({ field }) => (
          <Switch
            {...field}
            color={color}
            onChange={onChange}
            checked={checked}
          />
        )}
      />
    </>
  );
};

export default MuiSwitch;
