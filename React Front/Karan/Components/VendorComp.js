import React from "react";



export default function VendorComp(){
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
                    <a className="nav-link" href="neworder">
                    Parts List
                    </a>
                  </li>
        
                
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Machine List
                    </a>
                  </li>
        
                
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                   Operator List
                    </a>
                  </li>
        
            
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                     Daily Task
                    </a>
                  </li>
        
                  {/* Quality Link */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Forword Parts to Assembly
                    </a>
                  </li>
        
               </ul>
              </div>

        </nav>
            </div>
        </div>
        </div>
        
    )
}