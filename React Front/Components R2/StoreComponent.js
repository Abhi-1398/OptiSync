import React from "react";
let StoreManager=()=>
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
                    Order Material
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Update Record
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Fetch Raw Material {/* change name */}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Forward Raw Material 
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default StoreManager;