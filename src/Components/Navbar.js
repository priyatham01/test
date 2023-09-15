import React from "react";
import img from "../Assets/indiapost.png"
import { Link } from "react-router-dom";
// import './Navbar.css'


const BASE_URL=process.env.REACT_API_BASE_URL;
console.log(process.env);

function Navbar(){
    return(
    <div className="flex items-center bg-red-700 "> 
        <div className="py-1.5  ml-10 mt-4 mb-4" >
        {/* border-2 border-grey-100 */}

        <Link to='/home'><img src={img} alt="indiapostlogo" style={{width:"120px"}}></img> </Link>
        </div>

        <div className=" font-semibold text-gray-50 flex items-center justify-center ml-10 gap-9 text-lg    ">
                
        <Link to="/home"> <h2> Home</h2> </Link> 
                    <h2> Mails </h2>
                    <h2> Banking </h2>
                    <h2> Insurance </h2>
                    <h2> MIscellaneous </h2>
                    <h2> About </h2>
        <Link to="/login"><h2> Login </h2></Link> 
                
        </div>

        
 
    </div>
          );
}

export default Navbar;
