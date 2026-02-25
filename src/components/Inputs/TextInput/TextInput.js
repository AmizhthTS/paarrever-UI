import { TextField, Typography } from '@mui/material';
import getStyles from './styles';
import { Controller } from 'react-hook-form';
import { getValueFromPath } from '../../../utils';

const TextInput = ({
  control,
  errors,
  type,
  name,
  validate,
  onKeyDownData,
  textLable,
  placeholderName,
  requiredMsg,
  inputProps,
  InputProps,
  onInput,
  style,
  size,
  label,
  labelStyle,
  labelMandatory,
  variant,
  multiline,
  rows
}) => {
  // console.log('Name  ->', name, requiredMsg);
  // console.log('Error msg', requiredMsg);
  // const { text = 'Welcome' } = props; // props destructuring
  // redux state define
  // component state definetion
  // dispatch defination
  // route defination
  // style imports
  // useEffect desfine
  // handlers funtion
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
          <TextField
            {...field}
            fullWidth
            id={name}
            type={type}
            label={textLable}
            placeholder={placeholderName}
            error={
              errors[name]
                ? errors[name].message
                : name.includes('.')
                  ? getValueFromPath(errors, `${name}.message`)
                  : false
            }
            onKeyDown={onKeyDownData && ((e) => onKeyDownData(e))}
            helperText={
              errors[name]
                ? errors[name].message
                : name.includes('.')
                  ? getValueFromPath(errors, `${name}.message`)
                  : ''
            }
            inputProps={inputProps}
            InputProps={InputProps}
            onInput={onInput && onInput}
            sx={style}
            size={size}
            multiline={multiline}
            rows={rows}
          />
        )}
      />
    </>
  );
};

export default TextInput;
