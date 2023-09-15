// import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

import Login from "./Components/login";
// import Axios from "./Components/Axios";





function App() {
  return (
    <BrowserRouter>



      <div className="App">
      
       <Navbar/>
       <Routes>
        <Route element={<Home/>} path="/home" />
        <Route element={<Login/>} path="/login" />
       </Routes>
      
       
     
    
      </div>
    </BrowserRouter>

    



  );
}

export default App;


// https://jsonplaceholder.typicode.com/users