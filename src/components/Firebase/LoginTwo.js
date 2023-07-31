import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckTwo from './ChekTwo';
import { Typography } from '@mui/material';





export default function LoginTwo() {
  
  

  return (
    <>
          
    
    <Box
    
    sx={{
        backgroundColor:'#F8F8FF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        height:"100vh",
        paddingTop:"40px"
 
        
    }}

    >
         <Typography style={{fontStyle:"italic",
                          position:"absolute",
                          color:"blue",
                          marginTop:"15px"}}
                          variant="h3">LOGIN</Typography>
    
     
     
        <Paper style={{ width: '40ch',
            height: '60vh',
            padding:20,
            paddingTop:"90px",
            paddingLeft:"50px",
        marginTop:10,
        marginBottom:20,
        flexDirection:'column',}}  elevation={3}  >
      <  CheckTwo />
      </Paper>
    


        

        
        
    </Box>
      </>
      


    // />
  );
}
