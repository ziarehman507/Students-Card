import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import  CustomizedInputsStyled  from '../mui.components/CssValidation' 
import Typography from '@mui/material/Typography';





export default function Check() {
  
  

  return (
    <>
    
    <Box
    
    sx={{
        backgroundColor:'#F8F8FF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
    }}

    >
      <Typography style={{fontStyle:"italic",
                          position:"absolute",
                          color:"blue",
                          marginTop:"15px"}}
                          variant="h3">SIGNUP</Typography>

    <Paper elevation={3} style={{width:"40ch",height:"75vh",
                                 padding:40,marginTop:70}}>

      <  CustomizedInputsStyled />
     </Paper>
        
    </Box>
      </>
  );
}
