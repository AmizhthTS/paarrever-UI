import { FormHelperText } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import getStyles from './styles';
import { clrplus } from '../../../assets';

const ColorInput = ({ control, errors, name, requiredMsg, onInput }) => {
  const {
    textDanger = {},
    // mr2 = {},
    colorSpan = {},
    cPointer = {}
  } = getStyles();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: requiredMsg }}
        render={({ field }) => (
          <>
            <label htmlFor="font" style={cPointer}>
              <input
                {...field}
                type="color"
                style={{ display: 'none' }}
                id="font"
                onInput={(e) => onInput(e.target.value)}
              />
              <span>
                <img src={clrplus} alt="" />
                <span style={colorSpan}>Add New Colors</span>
              </span>
            </label>
          </>
        )}
      />
      <FormHelperText sx={textDanger}>
        {errors[name] && errors[name].message}
      </FormHelperText>
    </>
  );
};

export default ColorInput;
