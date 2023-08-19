import React from "react";

let Manager = () => {
  
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sidebar">
          {/* Navigation Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#leftNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="leftNavbar">
            <ul className="navbar-nav flex-column">
              {/* Manager Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manager
                </a>
              </li>
    
              {/* Production Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Production
                </a>
              </li>
    
              {/* Store Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
    
              {/* Vendor Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vendor
                </a>
              </li>
    
              {/* Quality Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quality
                </a>
              </li>
    
              {/* Dispatch Link */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dispatch & assembly
                </a>
              </li>
            </ul>
          </div>
        </nav>
  );
};

export default Manager;