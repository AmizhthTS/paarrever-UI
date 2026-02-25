import { Typography } from '@mui/material';

const LimitedText = ({ text, wordLimit, style }) => {
  var len = text.split(' ');
  const limitedText = text.split(' ').slice(0, wordLimit).join(' ');
  return (
    <Typography sx={style && style}>
      {limitedText} {len.length > 1 && `...`}
    </Typography>
  );
};
export default LimitedText;
