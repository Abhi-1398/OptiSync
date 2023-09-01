import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewOrder from "./MNewOrder";
import Logout from "./LogoutComp";
import Checkstatus from "./Manager_CheckStatus";
import SetupComp from "./SetupComp";
import Forgetpassbymanager from "./Forgetpassbymanager";

export default function Manager ()  {
  const [loggedUser,setallPlan] = useState([]);
    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if (loggedUser) {
         setallPlan(loggedUser);
        }
      }, []);
      console.log(JSON.stringify(loggedUser))
  
    return (
      <div>
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
      <Link to="/setup" className="nav-link px-3">Setup</Link>
    </li> 
       
    <li className="nav-item">
      <Link to="/neworder" className="nav-link px-3">New Order</Link>
    </li>

    <li className="nav-item">
      <Link to="/checkstatus" className="nav-link px-3">Check Status</Link>
    </li>

    <li className="nav-item">
      <Link to="/approvedpassword" className="nav-link px-3">Approved Password</Link>
    </li>

    <li className="nav-item">
      {/* <Link to="/confirmdispatch" className="nav-link px-3">Confirm Dispatch</Link> */}
    </li>
   

    <li className="nav-item">
      <Link to="/logout" className="nav-link px-3">Logout</Link>
    </li>
   
         </ul>
        </div>
       <div>
            <Routes>
            <Route path='setup' element={<SetupComp/>}/>
             <Route path='neworder' element={<NewOrder/>}/>
             <Route path='checkstatus' element={<Checkstatus />}></Route>
             <Route path='approvedpassword' element={<SetupComp/>}/>
             <Route path='logout' element={<Logout />}></Route>
             <Route path='approvedpassword' element={<Forgetpassbymanager/>}></Route>
             </Routes>
            
            
            
            </div> 

  </nav>
        
  </div>

  </div>      
  );
}

