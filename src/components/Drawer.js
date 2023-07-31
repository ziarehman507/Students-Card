

import React, { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Drawer} from '@mui/material';
import  ModalPopup  from './ModelPopup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';










export default function PersistentDrawerLeft () {
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();


  const handleClick =()=>{
    setOpen(true)
  }
    const Logout = () => {
    localStorage.removeItem('user')
    navigate('/Login', { replace: true })

  };

  return (
    <Box>
<IconButton style={{marginLeft:20,marginTop:10}} onClick={handleClick}>
  <MenuIcon style={{fontSize:40,}} />
</IconButton>

      <Drawer
        aria-lable="muiDrawer"
        anchor="left"
        open={open}
        onClose={()=>setOpen(false)}

      >
        <Stack width={200} spacing={2}>
          <Typography variant="h5" color='secondary' align="center">
            Drawer Items
          </Typography>
          <List>
        
                   {[ <ModalPopup/>  ,<div onClick={Logout}>Logout</div> ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 4 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
        </Stack>
        
      </Drawer>
      </Box>
    
  );
}