import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Home_1 from './Home_1'


const Home = () => {

 

  return (
    <>
    <Box flex={5}>
    <Box width={"100%"} mt={3} gap={2} display={"flex"} sx={{marginRight:"20%"}} justifyContent={"right"}>
        <Box >
          <Link to={"/register"}>
        <Button variant="outlined" color="primary">
          Register
        </Button> 
        </Link>
        </Box>
        <Box mr={4}>
          <Link to={"/login"}>
        <Button  variant="contained" color="primary">
          Login
        </Button> 
        </Link>
        </Box>
    </Box>
   
    <Home_1/>
    </Box>
 </>
  
  )
}

export default Home
