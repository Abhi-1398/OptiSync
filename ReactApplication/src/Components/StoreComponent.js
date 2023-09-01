import React, { useEffect, useState } from "react";
import ReceivedMaterialVendor from "./ReceivedMaterialVendor";
import OrderRawMaterial from "./OrderRawMaterial";
import { Route, Routes , Link } from 'react-router-dom';

function StoreComp(){
        const data = JSON.parse(localStorage.getItem("loggedUser")).company.company_name;
   
    return(

        
        
            <div class="col-md-4">
              <h5 style={{backgroundColor:"green"}}>Company: {data}</h5>
            <nav className="navbar navbar-expand-md navbar-light bg-light sidebar">
              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#leftNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
        
              
              <div className="collapse navbar-collapse" id="leftNavbar">
                <ul className="navbar-nav flex-column">
                
                <li className="nav-item">
                <Link to="/OrderRawMaterial" className="nav-link" href="#">
                  order Raw Material
                </Link>
              </li>
          <li className="nav-item">
            <Link to="/ReceivedMaterialVendor" className="nav-link px-3">recieved material from vendor</Link>
          </li>
          <li className="nav-item">
            <Link to="/checks" className="nav-link px-3">check status of raw material</Link>
          </li>
          <li className="nav-item">
            <Link to="/forwardMaterial" className="nav-link px-3">forward material</Link>
          </li>
          <li className="nav-item">
            <Link to="/Logout" className="nav-link px-3">LogOut</Link>
          </li>
               </ul>
              </div>
             <div>
                  
            </div> 
   
        </nav>
                
        </div>
  
    )
}

export default StoreComp;
