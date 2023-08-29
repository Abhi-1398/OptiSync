import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import DispatchReceivedQty from "./DispatchReceivedQty";
import DPlanTask from "./DPlanTask";
import FinalDispatch from "./FinalDispatch";
import Logout from "./LogoutComp";

function DispatchComp()
{
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
      <Link to="/receivedp" className="nav-link px-3">Received Product from Quality</Link>
    </li>

    <li className="nav-item">
      <Link to="/plantaskD" className="nav-link px-3">Plan Daily Task</Link>
    </li>

    <li className="nav-item">
      <Link to="/finalD" className="nav-link px-3">Final Dispatch</Link>
    </li>

   


    <li className="nav-item">
      <Link to="/logout" className="nav-link px-3">Logout</Link>
    </li>
   
         </ul>
        </div>
       <div>
            <Routes>
             <Route path='receivedp' element={<DispatchReceivedQty/>}/>
             <Route path='plantaskD' element={<DPlanTask/>}/>
             <Route path='finalD' element={<FinalDispatch />}></Route>
    
             

             <Route path='logout' element={<Logout/>}></Route> 
             </Routes>
            
            
            
            </div> 
            </nav>
</div>
  </div>
        

    )
}
export default DispatchComp;