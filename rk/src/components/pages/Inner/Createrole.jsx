import React from 'react'
import Side from "../../Side"
import { Grid } from '@mui/material';
import "./createrole.css";

const Createrole = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("login-form");
    
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
    
            // Get the selected access levels based on checked checkboxes
            const accessLevels = [];
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach((checkbox) => {
                accessLevels.push(checkbox.value);
            });
    
            // Add your authentication logic here
            // For demonstration purposes, we'll just display the input values and selected access levels
            alert(`Email: ${email}\nPassword: ${password}\nAccess Levels: ${accessLevels.join(", ")}`);
        });
    });
    
  return (
        
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <div>
    <div className="body1"></div>
    <div className="login-container">
        <h2 className="h2">Add User Permission</h2>
        <form id="login-form">
            <div className="input-group">
                <label className="label" htmlFor="email">Email:</label>
                <input className="input" type="text" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
                <label lass="label" htmlFor="password">Password:</label>
                <input className="input"  type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="input-group">
                <label>Access Level:</label>
                <div className="r">
                    <input className="input"  type="checkbox" id="read" value="read" />
                    <label  lass="label" for="read">Read Only</label>
                    <input className="input"  type="checkbox" id="write" value="write" />
                    <label lass="label"  for="write">Write Only</label>
                    <input className="input"  type="checkbox" id="update" value="update" />
                    <label lass="label" for="update">Update Only</label>
                    <input  className="input" type="checkbox" id="delete" value="delete" />
                    <label lass="label" for="delete">Delete Only</label>
                </div>
            </div>
            <div className="input-group">
                <button className="button" type="submit">Confirm</button>
            </div>
        </form>
    </div>
</div>
    </Grid>
  </Grid>
  )
}

export default Createrole
