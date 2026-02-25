import { Button } from '@mui/material';

const MuiButton = ({
  style,
  lableName,
  variant,
  type,
  fullWidth,
  onClick,
  buttonImage,
  startIcon,
  endIcon,
  href,
  target
}) => {
  return (
    <Button
      type={type}
      sx={style}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      target={target}
    >
      {buttonImage && (
        <span>
          <img src={buttonImage} />
        </span>
      )}
      {lableName}
    </Button>
  );
};

export default MuiButton;
