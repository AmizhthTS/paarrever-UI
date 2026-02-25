import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ViewDocument = ({ viewImageName, open, handleClose }) => {
  //   const [format, setFormat] = useState('')
  // useEffect(() => {
  //   if (viewImageName) {
  //
  //     var name = viewImageName.split('.')
  //
  //     setFormat(name[1])
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [viewImageName])
  //
  // useEffect(() => {
  //   componentDidMount()
  // }, []);
  // const componentDidMount = () => {
  //   var val = document.getElementsByTagName("iframe")
  //
  //   // val.getElementsByTagName("img").style.width = 100;
  // }
  // window.onload = function() {
  //   let frameElement = document.getElementsByTagName("iframe");
  //   let doc = frameElement.contentDocument;
  //   doc.body.innerHTML = doc.body.innerHTML + '<h1>Hai</h1>';
  // }
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(173, 29, 29, 1)',
          boxShadow: '0px 0px 5px gainsboro'
        }}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            View Document
          </Typography>
          <IconButton
            sx={{ marginRight: '40px !important' }}
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* {
        (format === 'png' || format === 'jpg' || format === 'jpeg') && (
          <iframe title="View Document" className='text-center ' src={viewImage} width="100%" height="100%" />
        )
      }
      {
        (format === 'pdf') && (
          <iframe title="View Document" className='text-center ' src={viewImage} width="100%" height="100%" />
        )
      } */}
      <iframe
        className="text-center"
        src={viewImageName}
        width="50%"
        height="100%"
        style={{ width: '100%' }}
      />

      {/* <img src={viewImage} width="100%" height="100%" className='viewImage'/> */}
      {/* <iframe className='text-center' src={viewImage} width="100%" height="100%" /> */}
    </Dialog>
  );
};

export default ViewDocument;
