import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/bootstrap/assets/css/docs.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Card from './components/Card';
import Mapcard from './components/Mapcard';
import Maprow from './components/Maprow';
import Feedback from './components/Feedback';
import Login from "./components/Login";
import Inventory from "./components/Inventory/Inventory";
import Profile from "./components/Profile";
import UploadPhoto from "./Test/UploadPhoto";
import AddInventory from "./components/Inventory/AddInventory";
import UpdateItem from "./components/Inventory/UpdateItem";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/card" element={<Card />}/>
            <Route path="/mapcard" element={<Mapcard />}/>
            <Route path="/maprow" element={<Maprow />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/feedback" element={<Feedback />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/inventory/addinventory" element={<AddInventory/>}/>
          <Route path="/inventory/updateitem/:_id" element={<UpdateItem/>}/>
            <Route path="/uploadphoto" element={<UploadPhoto />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
