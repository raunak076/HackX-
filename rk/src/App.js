import { Grid } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Side from './components/Side';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mng from './components/pages/Mng';
import BarChart from './components/pages/BarChart';
import Role from './components/pages/Role';
import Mypro from './components/pages/Mypro';
import Qr from './components/pages/Qr';
import  Home  from './components/Home';
import Piechart from './components/pages/Piechart';
import  Signin  from './components/Signin';
import  Signup  from './components/Signup';
import { useState } from 'react';
import AddItem from './components/AddItem';
import Createrole from "./components/pages/Inner/Createrole";
import Generateqr from './components/pages/Generateqr';



function App() {
  
  return (
    <div className="App">
      <Router>
        
       
            <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<Mng />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/role" element={<Role />} />
          <Route path="/myprod" element={<Mypro />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/pie" element={<Piechart />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/createrole" element={<Createrole />} />
          <Route path="/genqr" element={<Generateqr />} />
          {/* Define more routes here */}
       
          </Routes>
         
      </Router>
    </div>
  );
}

export default App;
