import React from "react";
let DispatchManager=()=>
{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light sidebar">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#leftNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="leftNavbar">
            <ul className="navbar-nav flex-column">
                
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Received Material
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Daily Task
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Final Dispatch Report {/* change name */}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Dispatch
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DispatchManager;