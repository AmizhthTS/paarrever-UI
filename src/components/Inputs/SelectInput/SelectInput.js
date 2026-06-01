import {
  FormHelperText,
  Typography,
  Autocomplete,
  TextField
} from '@mui/material';
import getStyles from './styles';
import { Controller } from 'react-hook-form';

const SelectInput = ({
  control,
  errors,
  name,
  requiredMsg,
  onChange,
  style,
  options = [],
  size,
  validate,
  label,
  labelStyle,
  labelMandatory,
  variant,
  textLable,
  placeholderName
}) => {
  const { lableCss = {}, textDanger = {} } = getStyles();

  return (
    <>
      {label && (
        <Typography sx={labelStyle ? labelStyle : lableCss} variant={variant}>
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
          <Autocomplete
            {...field}
            options={options || []}
            getOptionLabel={(option) => {
              if (typeof option === 'string') return option;
              return option?.label || '';
            }}
            isOptionEqualToValue={(option, value) => {
              const optionValue =
                typeof option === 'string' ? option : option.value;
              const selectedValue =
                typeof value === 'string' ? value : value.value;
              return optionValue === selectedValue;
            }}
            onChange={(_, newValue) => {
              const selectedVal = newValue
                ? typeof newValue === 'string'
                  ? newValue
                  : newValue.value
                : '';
              field.onChange(selectedVal);
              if (onChange) {
                onChange(selectedVal);
              }
            }}
            value={
              (options || []).find((opt) => {
                const optVal = typeof opt === 'string' ? opt : opt.value;
                return optVal === field.value;
              }) || null
            }
            fullWidth
            size={size}
            sx={style}
            renderInput={(params) => (
              <TextField
                {...params}
                label={textLable}
                placeholder={placeholderName}
                error={!!errors[name]}
                variant="outlined"
              />
            )}
          />
        )}
      />
      <FormHelperText sx={textDanger}>
        {errors[name] && errors[name].message}
      </FormHelperText>
    </>
  );
};

export default SelectInput;
