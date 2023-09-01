import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import QualityAssemblyComp from "./QualityAssemblyComponent";
let AssemblyQA=()=>
{
    return(
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
      <Link to="/receivedp" className="nav-link px-3">Received Part from production</Link>
    </li>

    <li className="nav-item">
      <Link to="/plantaskAQA" className="nav-link px-3">Plan Daily Task</Link>
    </li>

    <li className="nav-item">
      <Link to="/forwordToD" className="nav-link px-3">Forward Parts to Dispatch</Link>
    </li>

   


   
   
         </ul>
        </div>
       <div>
            <Routes>
             {/* <Route path='receivedp' element={<AssemblyQA/>}/>
             <Route path='plantaskAQA' element={<AandQAPlanTask/>}/>
     */}
            <Route path='receivedp' element={<AandQAReceivedQty/>}/>
    
             <Route path='plantaskAQA' element={<AandQAPlanTask/>}/>
            
             </Routes>
            
            
            
            </div> 
            </nav>
</div>
  </div>
        

    );
};

export default AssemblyQA;