import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DailyTask from "./PNewTask";

function ProductionComp(){

  
  return(
        <div class container>
        <div class= 'row'>
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
                  <Link to="/productlist" className="nav-link" href="#">
                    Received Material
                </Link>
                  </li>
        
                
                  <li className="nav-item">
                  <Link to="/DailyTask" className="nav-link" href="#">
                    Daily Task
                </Link>
                  </li>
        
                
                  <li className="nav-item">
                  
                    <Link to="/productlist" className="nav-link" href="#">
                    Forward Parts to A/QA
                </Link>
                   
                    
                  </li>
        
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                   Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              <Routes>
                    <Route path='DailyTask' element={<DailyTask/>}/>
        

                  </Routes>
              </div>

        </nav>
            </div>
        </div>
        </div>
        
    )
}

export default ProductionComp;