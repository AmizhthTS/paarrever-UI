import {
  FormHelperText,
  MenuItem,
  Select,
  //   TextField,
  Typography
} from '@mui/material';
import getStyles from './styles';
import { Controller } from 'react-hook-form';

const SelectInput = ({
  //   control,
  //   errors,
  //   type,
  //   name,
  //   validate,
  //   onKeyDownData,
  //   textLable,
  //   placeholderName,
  //   requiredMsg,
  //   inputProps,
  //   onInput,
  //   style,
  //   multiline,
  //   rows
  control,
  errors,
  name,
  renderValue,
  requiredMsg,
  onChange,
  style,
  displayEmpty,
  mapValues,
  size,
  validate,
  label,
  labelStyle,
  labelMandatory,
  variant
}) => {
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
          // <TextField
          //   {...field}
          //   fullWidth
          //   id={name}
          //   type={type}
          //   label={textLable}
          //   placeholder={placeholderName}
          //   error={!!errors[name]}
          //   onKeyDown={onKeyDownData && ((e) => onKeyDownData(e))}
          //   helperText={errors[name] ? errors[name].message : ''}
          //   inputProps={inputProps}
          //   onInput={onInput && onInput}
          //   sx={style}
          //   size={size}
          //   multiline={multiline}
          //   rows={rows}
          // />
          <Select
            {...field}
            fullWidth
            onChange={onChange}
            sx={style}
            displayEmpty={displayEmpty}
            renderValue={renderValue}
            error={!!errors[name]}
            size={size}
          >
            {mapValues &&
              mapValues.map((list, index) => (
                <MenuItem value={list.value} key={index}>
                  {list.name}
                </MenuItem>
              ))}
          </Select>
        )}
      />
      <FormHelperText sx={textDanger}>
        {errors[name] && errors[name].message}
      </FormHelperText>
    </>
  );
};

export default SelectInput;
