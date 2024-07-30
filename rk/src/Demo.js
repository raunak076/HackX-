import React, { useState } from 'react'
// import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase, Badge ,Box, Avatar, Menu, MenuItem} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Demo = () => {
    const [open,setOpen]=useState(false);
    const Stb=styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    });
    const Search=styled('div')(({theme})=>({
        backgroundColor:'white',
        padding:'0 10px',
        borderRadius:'5px',
        width:'40%',
    }));
    const Icon=styled(Box)(({theme})=>({
       display:'none',
       gap:'20px',
       alignItems:'center',
       [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
       
    }))
    const User=styled(Box)(({theme})=>({
        display:'flex',
        gap:'20px',
        alignItems:'center',
        [theme.breakpoints.up("sm")]:{
            display:'none'
        }
     }));
    
   
   
  return (
    <div>
        <AppBar  position="sticky" color="primary">
          <Box position={'sticky'}>
          <Stb>
            <Typography variant="h6" sx={{display:{xs:'none',sm:'block',}}}>
              Team Radhey
            </Typography>
     <MenuIcon sx={{display:{xs:"block",sm:'none'}}} />
   
     <Icon>
     <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <NotificationsIcon />
      </Badge>
      <Avatar onClick={()=>setOpen(true)} sx={{width:'30px',height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-R0lKIghiAnFejDCFWCRBD00wwq7cnXmEw&usqp=CAU" />
      </Icon>
      <User>
      <Avatar onClick={()=>setOpen(true)} sx={{width:'30px',height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-R0lKIghiAnFejDCFWCRBD00wwq7cnXmEw&usqp=CAU" />
    <Typography variant="span" color="initial">Krishna</Typography>
      </User>
          </Stb>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       onClose={()=>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </Box>
        </AppBar>
       
    </div>
  )
}

export default Demo
