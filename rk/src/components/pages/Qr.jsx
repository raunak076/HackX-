import React from 'react'
import Side from "../Side";
import { Grid } from '@mui/material';
import  { useState } from "react";
import { styled } from "@mui/material/styles";
import{ Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import jsQR from "jsqr"; // Import jsqr
import "./BarCon.css";
import { Link } from 'react-router-dom';

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});



const Qr = () => {
  const [qrCodeData, setQrCodeData] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const reader = new FileReader();

        reader.onload = (event) => {
          const image = new Image();
          image.src = event.target.result;

          image.onload = () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);

            const imageData = context.getImageData(
              0,
              0,
              image.width,
              image.height
            );

            // Use jsqr to decode the QR code
            const code = jsQR(
              imageData.data,
              imageData.width,
              imageData.height
            );
            if (code) {
              setQrCodeData(code.data);
            } else {
              console.error("No QR code found.");
            }
          };
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // const handleButtonClick = (data) => {
  const jsonStr = qrCodeData;

  try {
    const jsonData = JSON.parse(jsonStr);

    if (Array.isArray(jsonData) && jsonData.length > 0) {
      const firstObj = jsonData[0];
      const product_name = firstObj.product_name;
      const product_price = firstObj.product_price;
      // const product_code = firstObj.product_code;
      const product_category = firstObj.product_category;
      const product_details = firstObj.product_details;
      const product_expiry = firstObj.product_expiry;
      const product_quantity = firstObj.product_quantity;


      console.log("Product Name:", product_name);
      console.log("Product Price:", product_price);
      console.log("Product Category:", product_category);
      console.log("Product Details:", product_details);
      console.log("Product Expiry:", product_expiry);
      console.log("Product Quantity:", product_quantity);

    } else {
      console.error("JSON data is not in the expected format.");
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  // };
  // const notify = () => toast("Wow so easy!");

  return (  
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <div className="body">
      <div className="upload">
        <p>Upload Or Drag QR code Here</p>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            name="qr_code"
            onChange={handleFileUpload}
          />
          {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        
          <ToastContainer /> */}
        </Button>
      </div>

      {/* {qrCodeData && (
        <div className="qr-code-data">
          <h2>QR Code Data</h2>
          <p >{qrCodeData}</p>
          <button onClick={() => handleButtonClick(qrCodeData)}>Parse JSON</button>

        </div>
      )} */}
    </div>
    <Box>
      <Link to={"/genqr"}>
      <Button variant="outlined" color="primary">
        Generate Qr
      </Button>
      </Link>
    </Box>
    </Grid>
  </Grid>
  )
}

export default Qr
