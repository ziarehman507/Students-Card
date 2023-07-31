import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom'
import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firestore';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});




export default function CheckTwo() {
  //password button
  
const [showPassword, setShowPassword] = useState(false);
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
const handleTogglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

 

  
  //signup functionality
  
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const fireAuth = firebase.auth()
const navigate = useNavigate ()



const handleLogin  = async () => {
  try {

    const authRes =  await fireAuth .signInWithEmailAndPassword(email,password)
     console.log ('user uid', authRes.user.uid)
     const Fulldata = await firebase.firestore()
     .collection('Student_Card')
     .doc(authRes.user.uid)
     .get()
     console.log (" ~handleLogin ~ Fulldata",Fulldata.data())

     const payload = {
      uid:authRes.user.uid,
      ... Fulldata.data()
     }
     swal({
      title: "Good job!",
      text: "Wellcome " + payload.name,
      icon: "success",
    });
     localStorage.setItem('user',JSON.stringify(payload))
   navigate('/',{replace: true})
   } catch (error) {
    swal({
      title: error.message,
      icon: "warning"
    });
     console.log(error.message)
     
   }
}

  



  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'flex',
        position:'absolute',
        flexDirection:'column',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 5,
      }}
    >
      <ValidationTextField
        label="Enter Your Email"
        required
        variant="outlined"
        defaultValue=" Email Error"
        id="validation-outlined-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

    
    
    <TextField
  label="Password"
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={handlePasswordChange}
  // Add any other props you need for the TextField component
  // (e.g., variant, fullWidth, margin, etc.)
  // {...otherTextFieldProps}
  InputProps={{
    endAdornment: (
      <IconButton onClick={handleTogglePasswordVisibility}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    ),
  }}
/>





    <Stack direction="row" spacing={2}>
      <Button onClick={handleLogin}  variant="contained" color="success">
        LOGIN
      </Button>
      <Button onClick={() => navigate('/Signup')}  variant="contained" endIcon={<SendIcon />}>
        Go To SignUp
      </Button>
      
      
    </Stack>
    
    
    </Box>
  );
}