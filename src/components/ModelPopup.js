import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddUser from './addUser';
import CloseIcon from '@mui/icons-material/Close';




export default function NestedModal() {
  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const colsePopup =()=>{
    setOpen(false);
  }

  return (
    <div>
      <div onClick={handleOpen}>Add Student</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box >
        <CloseIcon style={{position:'absolute', marginLeft:850,}} onClick={colsePopup}/>

          <AddUser colsePopup={colsePopup} />
        </Box>
      </Modal>
    </div>
  );
}
