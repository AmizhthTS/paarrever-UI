import { Autocomplete, TextField, Typography } from '@mui/material';
import getStyles from './styles';
import { Controller } from 'react-hook-form';
import { getValueFromPath } from '../../../utils';

const AutocompleteInput = ({
  control,
  errors,
  //   type,
  name,
  //   validate,
  //   onKeyDownData,
  textLable,
  placeholderName,
  requiredMsg,
  onChangeValue,
  defaultValue,
  //   InputProps,
  //   onInput,
  style,
  size,
  label,
  labelStyle,
  labelMandatory,
  variant,
  multiple,
  limitTags,
  options,
  disableport
  //   watch
}) => {
  const { lableCss = {}, textDanger = {} } = getStyles();

  return (
    <>
      {label && (
        <Typography sx={labelStyle || lableCss} variant={variant}>
          {label} {labelMandatory && <span style={textDanger}>*</span>}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: requiredMsg
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            disableClearable
            disablePortal={disableport}
            //   {...field}
            id={name}
            sx={style}
            size={size}
            multiple={multiple}
            limitTags={limitTags}
            options={options}
            onChange={(_, newValue) => {
              onChange(newValue); // Update form state
              onChangeValue && onChangeValue(newValue);
            }}
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : String(option)
            }
            value={value || []} // Ensure correct value format
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  textLable &&
                  `${textLable} ${textLable && labelMandatory ? `*` : ` `}`
                }
                placeholder={placeholderName}
                error={
                  errors[name]
                    ? errors[name].message
                    : name.includes('.')
                      ? getValueFromPath(errors, `${name}.message`)
                      : false
                }
                helperText={
                  errors[name]
                    ? errors[name].message
                    : name.includes('.')
                      ? getValueFromPath(errors, `${name}.message`)
                      : ''
                }
              />
            )}
          />
        )}
      />
    </>
  );
};

export default AutocompleteInput;
