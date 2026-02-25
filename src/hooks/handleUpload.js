import { useDispatch } from 'react-redux';
import { setNotification } from '../redux/Reducer/Notification/Notification';

export const useHandleUpload = () => {
  const dispatch = useDispatch();

  const handleUpload = (event, format) => {
    return new Promise((resolve, reject) => {
      if (event !== null) {
        let logoselectedFile;
        if (event.target === undefined) {
          logoselectedFile = event;
        } else {
          logoselectedFile = event.target.files[0];
        }

        if (logoselectedFile) {
          const fileSizeLimit = 5 * 1024 * 1024; // 5 MB limit
          if (logoselectedFile.size > fileSizeLimit) {
            dispatch(setNotification({ isActive: true, messageId: 106 }));
            reject('File size exceeds the limit');
            return;
          }

          let reader = new FileReader();
          let imagetype = logoselectedFile.type;
          let imagedatatype = imagetype.split('/');
          let img_crt_type = imagedatatype[1];

          if (
            (format === 'file' && img_crt_type === 'pdf') ||
            (format === 'image' &&
              (img_crt_type === 'jpeg' ||
                img_crt_type === 'jpg' ||
                img_crt_type === 'png')) ||
            (format === 'All' &&
              (img_crt_type === 'jpeg' ||
                img_crt_type === 'jpg' ||
                img_crt_type === 'png' ||
                img_crt_type === 'pdf'))
          ) {
            reader.readAsDataURL(logoselectedFile);
            reader.onload = () => {
              let logourl1 = reader.result;
              let spl = logourl1.split(',');
              let ImageValue = spl[1];
              let img_name = logoselectedFile.name;

              let req = {
                file: ImageValue,
                name: img_name,
                url: logourl1,
                size: logoselectedFile.size
              };
              resolve(req);
            };

            reader.onerror = () => {
              reject('Error reading file');
            };
          } else {
            dispatch(setNotification({ isActive: true, messageId: 107 }));
            reject('Invalid file format');
          }
        }
      } else {
        reject('No file selected');
      }
    });
  };

  return handleUpload;
};
