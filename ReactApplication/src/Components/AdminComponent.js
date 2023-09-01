import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import PendingReq from "./PendingReq";
import Logout from "./LogoutComp";
import Forgetpassbyadmin from "./Forgetpassbyadmin";
import Checkcompanystatus from "./Checkcompanystatus";


function AdminComp(){
    return(
        <div class="col-md-4 ">
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
        <Link to="/pendingrequest" className="nav-link px-3">Pending Request</Link>
      </li>
      <li className="nav-item">
                <Link to="/forgetbyadmin" className="nav-link px-3">Approved Password</Link>
              </li>

              <li className="nav-item">
                <Link to="/checkcompany" className="nav-link px-3">Check company status</Link>
              </li>

      <li className="nav-item">
        <Link to="/logout" className="nav-link px-3">Logout</Link>
      </li>
     
           </ul>
          </div>
         <div>
              <Routes>
               <Route path='pendingrequest' element={<PendingReq/>}/>
               <Route path='forgetbyadmin' element={<Forgetpassbyadmin/>}></Route>
               <Route path='checkcompany' element={<Checkcompanystatus/>}></Route>

               <Route path='logout' element={<Logout />}></Route>
               </Routes>
              
              
              
              </div> 

    </nav>

        </div>
    );
}
export default AdminComp;