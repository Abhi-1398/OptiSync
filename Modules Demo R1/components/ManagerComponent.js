import React from "react";

let Manager = () => {
  
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
                <a className="nav-link" href="#">
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
    
              {/* Quality Link */}
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
        </nav>
  );
};

export default Manager;