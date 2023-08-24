import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import NewOrder from "./MNewOrder";
let Manager = () => {
/*   const navigate  = useNavigate();
  const navigateToNewOrder = () => {
    navigate('/NewOrder');
  } */
  
    return (
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
          <a className="nav-link" href="neworder">
            New Order
          </a>
        </li>
    
             
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Check Status
                </a>
              </li>
    
             
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Department
                </a>
              </li>
    
         
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Approvals
                </a>
              </li>
    
             
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
    
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Confirm Dispatch
                </a>

              </li>
              <li className="nav-item">
                    <a className="nav-link" href="#">
                    Password Recovery
                    </a>
                    </li>
            </ul>
            
          </div>
       
       <Routes>
        <Route path = 'neworder' element={<NewOrder/>}/>
       </Routes>

          
          
        </nav>
        
  );
};

export default Manager;     