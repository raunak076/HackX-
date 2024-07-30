import React,{useState , useEffect} from "react";
// import { useState } from "react";
import "./Mng.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button'
import { Grid } from "@mui/material";
import Side from "../Side";
import axios from "axios";


export default function Mng() {
  const[data,setData] = useState([])
  useEffect(()=>{
      const fetchData = async()=>{
        const res = await axios.get("http://localhost:8000/products")
        const d = await res.data
        setData(d)
        console.log("data" , data)
      }
     fetchData();
    },[])
    // const handleDelete = async(element,key)=>{
    //   console.log(element,key)
    //     const res = await axios.delete(`http://localhost:8000/:${key}`)
    // }
    // const products = [
    //     {
    //       name: "Boat Watch",
    //       Item: 2,
    //       price: 320,
    //       quantity: 3,
    //       category: "Electronic",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },{
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },{
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     },
    //     {
    //       name: "Product 2",
    //       Item: 5,
    //       price: 450,
    //       quantity: 2,
    //       category: "Gadget",
    //     }
    //   ];
    
  return (
    <Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <div className="manageproduct">
      <h2>Inventory Item</h2>
      <div className="product">
        <div className="header_product">
          <div className="field">
            Sr no
          </div>
          <div className="field">Name</div>
          <div className="field">Item</div>
          <div className="field">Price</div>
          <div className="field">Quantity</div>
          <div className="field">Category</div>
          <div className="edit_delete_product">
            Action
          </div>
        </div>
    
        <div className="">
  {data.map((product,key) => (
    <div key={key} className="all_product">
      <div className="field">{key+1}</div>
      <div className="field">{product.name}</div>
      <div className="field">{product.stock}</div>
      <div className="field">{product.price}</div>
      <div className="field">{product.quantity}</div>
      <div className="field">{product.category}</div>
      <div className="edit_product">
        <Button variant="outlined" color="secondary">
        <VisibilityIcon style={{ margin: "0 15px", color: "blue" }} />
        </Button>
        <Button variant="outlined" color="secondary">
        <EditIcon style={{ margin: "0 15px", color: "green" }} />
          </Button>
          <Button variant="outlined" color="secondary" /*onClick={element=>{handleDelete(element,product._id)}}*/>
          <DeleteIcon style={{ margin: "0 15px", color: "red" }} />
          </Button>
      
       
      
      </div>
    </div>
  ))}
</div>

        

      </div>
    </div>
    </Grid>
  </Grid>
  );
}

