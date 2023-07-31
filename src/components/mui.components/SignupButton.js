import * as React from 'react';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firestore';

export default function SignupButton() {
    const navigate = useNavigate
    const fireAuth = firebase.auth()
const fireStore = firebase.firestore()
    


  return (
    <Stack direction="row" spacing={2}>
      <Button   variant="contained" color="success">
        SignUp
      </Button>
      {/* <Button onClick={() => navigate('/Login')}  variant="contained" endIcon={<SendIcon />}>
        Go To LOGIN
      </Button> */}
      
      
    </Stack>
  );
}