import React from "react";
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import DailyTask from "./PNewTask";

let Production=()=>
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
                    <a className="nav-link" href="dailytask">
                    Daily Task
                    </a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                    Forward Material 
                    </a>
                    </li>
                </ul>
            </div>
            <Routes>
        <Route path = 'dailytask' element={<DailyTask/>}/>
       </Routes>

        </nav>
    );
};

export default Production;