import React, { useState } from "react";
import ProductDisplay from "./QrCode";
import './Qrcode.css';

function Generateqr() {
  const [productData, setProductData] = useState({
    product_name: "",
    product_code: "",
    product_price: 0,
    product_quantity: 0,
    product_category: "",
    product_details: "",
    product_expiry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="left">
      <div>
        <label className="o">Product Name:</label><br></br>
        <input className="hii"
          type="text"
          name="product_name"
          value={productData.product_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="o">Product Code:</label><br></br>
        <input className="hii"
          type="text"
          name="product_code"
          value={productData.product_code}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="o">Product Price:</label><br></br>
        <input className="hii"
          type="number"
          name="product_price"
          value={productData.product_price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="o">Product Details:</label><br></br>
        <input className="hii"
          type="text"
          name="product_details"
          value={productData.product_details}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="o">Product Category:</label><br></br>
        <input className="hii"
          type="text"
          name="product_category"
          value={productData.product_category}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="o">Product Expiry:</label><br></br>
        <input className="hii"
          type="date"
          name="product_expiry"
          value={productData.product_expiry}
          onChange={handleInputChange}
        />
      </div>
      </div>
      {/* Add more input fields for other product data */}
      <div className="right">
      <ProductDisplay productData={productData} />
      </div>
    </div>
  );
}

export default Generateqr;