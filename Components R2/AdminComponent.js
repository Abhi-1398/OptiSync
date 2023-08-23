import React from "react";
let Admin=()=>
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
                    New Request
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Update Process
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    New Users
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Password Recovery
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    User Status
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Admin;