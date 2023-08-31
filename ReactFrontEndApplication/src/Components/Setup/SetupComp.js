import React from "react";
import { Route ,Routes ,Link } from "react-router-dom";
import ProductListComp from "./ProductListComp";
import PartListComp from "./PartListComp";
import RawMaterialListComp from "./RawMaterialListComp";
import MachineListComp from "./MachineListCom";
import VendorComp from "./VendorComp";
import CpmComp from "./CpmComp";
import Manager from "./ManagerComponent";


function SetupComp(){
    return(
        
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
                  Product List
                </Link>
              </li>
          <li className="nav-item">
            <Link to="/partlist" className="nav-link px-3">Part List</Link>
          </li>
          <li className="nav-item">
            <Link to="/rawmateriallist" className="nav-link px-3">Raw-Material List</Link>
          </li>
          <li className="nav-item">
            <Link to="/machinelist" className="nav-link px-3">Machine List</Link>
          </li>
          <li className="nav-item">
            <Link to="/vendors" className="nav-link px-3">Vendors</Link>
          </li>
          <li className="nav-item">
            <Link to="/cpm" className="nav-link px-3">CPM</Link>
          </li>
          <li className="nav-item">
            <Link to="/manager" className="nav-link px-3">Back to Home</Link>
          </li>
               </ul>
              </div>
             <div>
                  <Routes>
                    <Route path='productlist' element={<ProductListComp/>}/>
                    <Route path='partlist' element={<PartListComp/>}/>
                    <Route path="rawmateriallist" element={<RawMaterialListComp/>}/>
                    <Route path="machinelist" element={<MachineListComp/>}/>
                    <Route path="vendors" element={<VendorComp/>}/>
                    <Route path="cpm" element={<CpmComp/>}/>
                    <Route path="manager" element={<Manager/>}/>

                  </Routes>
                  
                  </div> 
   
        </nav>

            </div>
  
    )
}

export default SetupComp;