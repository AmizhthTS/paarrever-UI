import Snackbar from '@mui/material/Snackbar';
import { setNotification } from '../../redux/Reducer/Notification/Notification';
import { useDispatch } from 'react-redux';
import notificationMessage from '../../utils/notification.json';
import getStyles from './styles';
const Notification = ({ isActive, messageId, message }) => {
  const dispatch = useDispatch();
  const {
    info = {},
    danger = {},
    success = {},
    warning = {},
    styleCss = {}
  } = getStyles();
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setNotification({ isActive: false, messageId: '', message: '' }));
  };
  let displayMsg = notificationMessage?.[messageId]?.data ?? message;
  let displayType = notificationMessage?.[messageId]?.type ?? '';
  return (
    <Snackbar
      open={isActive}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      message={displayMsg}
      sx={
        (displayType === 'info' && info) ||
        (displayType === 'danger' && danger) ||
        (displayType === 'success' && success) ||
        (displayType === 'warning' && warning) ||
        styleCss
      }
    />
  );
};

export default Notification;

// success
// danger
// info
// warning
