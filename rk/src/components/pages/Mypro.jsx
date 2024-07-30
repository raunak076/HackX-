import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import "./mypro.css";
import {useNavigate} from "react-router-dom";
import Side from "../Side";
import { Grid } from '@mui/material';
import axios from 'axios';

const Mypro = () => {
  const[data,setData] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("http://localhost:8000/products")
      const d = await res.data
      setData(d)
      console.log("data" , data)
    }
   fetchData();
  },[data])
  const navigate = useNavigate()
    const rows=[
        {
           name:"phone",
           price:250,
           qty:2,
           expires:"22 october 2023",
           cat:"electronics" 
        },
        {
            name:"TV",
            price:22250,
            qty:12,
            expires:"22 october 2023",
            cat:"electronics" 
         },
         {
            name:"calculator",
            price:1250,
            qty:2,
            expires:"22 october 2023",
            cat:"electronics" 
         },
         {
            name:"phone",
            price:250,
            qty:2,
            expires:"22 october 2023",
            cat:"electronics" 
         },
         {
            name:"phone",
            price:250,
            qty:2,
            expires:"22 october 2023",
            cat:"electronics" 
         }
    ]
  return (
         
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <Box flex={4}>
    <Box className={"btn-add"} sx={{position:"absolute",bottom:"20px",textAlign:"center"}}>
         <Button sx={{borderRadius:"40%",height:"60px"}} variant="contained" color="secondary" onClick={()=>{navigate("/add-item")}}>
     <AddIcon /> 
   </Button>
    </Box>
    <Box className="table">
      <Box p={2}>
      <Typography variant="h5" color="initial">Recently Added</Typography>
      </Box>
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty(g)</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Expires&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.expiry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
   </Box>
    </Grid>
  </Grid>
   
  )
}

export default Mypro
