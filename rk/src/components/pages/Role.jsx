import { Box, Button } from '@mui/material'
import React from 'react'
import "./Role.css"
import Side from "../Side";
import { Grid } from '@mui/material';
import {Link} from "react-router-dom";

const Role = () => {
  return (
         
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <Box>
    <Box className={"r-btn"}>
      <Box  >
        <Link to={"/createrole"}> 
        <Button sx={{ bgcolor: "rgba(35, 180, 32,0.7)",color:"black"}} variant='outlined' size='large'>
    Create Role
        </Button>
        </Link>
        </Box>
        <Box>
        <Button sx={{ bgcolor:" rgba(72, 149, 194,0.8)",color:"black"}} variant='outlined' size='large'>
        Manage Role
        </Button>
      </Box>
      </Box>
   </Box>
    </Grid>
  </Grid>
  
  )
}

export default Role
