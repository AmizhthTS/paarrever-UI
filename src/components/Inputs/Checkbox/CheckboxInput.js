import { Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import getStyles from './styles';
const CheckboxInput = ({
  control,
  name,
  errors,
  requiredMsg,
  textLable,
  value,
  checked
}) => {
  const { lableCss = {} } = getStyles();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: requiredMsg }}
        render={({ field }) => (
          <FormControlLabel
            label={textLable}
            control={
              <Checkbox
                sx={lableCss}
                {...field}
                value={value}
                checked={checked}
              />
            }
          />
        )}
      />
      <FormHelperText sx={{ color: 'red' }}>
        {errors[name] ? errors[name]?.message : ''}
      </FormHelperText>
    </>
  );
};

export default CheckboxInput;
