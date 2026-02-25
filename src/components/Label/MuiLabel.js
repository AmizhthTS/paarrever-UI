import { Typography } from '@mui/material';
import getStyles from './styles';

const MuiLabel = ({ label, labelStyle, mandatory, variant }) => {
  const { lableCss = {}, textDanger = {} } = getStyles();
  return (
    <>
      {label && (
        <Typography sx={labelStyle ? labelStyle : lableCss} variant={variant}>
          {label} {mandatory && <span style={textDanger}>*</span>}
        </Typography>
      )}
    </>
  );
};

export default MuiLabel;
