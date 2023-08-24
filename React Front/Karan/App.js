
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import LoginComp from './Components/LoginComp';
import RegistrationComp from './Components/RegistrationComp';
import'bootstrap/dist/css/bootstrap.min.css';
import HomeComp from './Components/HomeComp'

import ManagerComp from './Components/ManagerComp';
import ProductionComp from './Components/ProductionComp';
import SetupComp from './Components/SetupComp';
import ProductListComp from './Components/ProductListComp';
import PartListComp from './Components/PartListComp';
import RawMaterialListComp from './Components/RawMaterialListComp';
import MachineListComp from './Components/MachineListCom';
import VendorComp from './Components/VendorComp';
import CpmComp from './Components/CpmComp';

function App() {
  return (
  
    <div className="App">

<h1 className="bg-primary text-white">welcome to Optisync </h1>

      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <li className="navbar-nav">    
                <li className="nav-item">
            <Link to="/" className="nav-link px-3">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link px-3">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="register" className="nav-link px-3">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="blog" className="nav-link px-3">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="gallary" className="nav-link px-3">Gallary</Link>
          </li>
          <li className="nav-item">
            <Link to="about us" className="nav-link px-3">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="manager" className="nav-link px-3">Manager</Link>
          </li>
          <li className="nav-item">
            <Link to="production" className="nav-link px-3">Production</Link>
          </li>
          <li className="nav-item">
            <Link to="setup" className="nav-link px-3">Setup</Link>
          </li>
          
          
          </li>

        </div>

      </nav>

      <Routes>
        <Route path='/' element={<HomeComp/>}/>
        <Route path='login' element={<LoginComp/>}/>
        <Route path='register' element={<RegistrationComp/>}/>
        <Route path='manager' element={<ManagerComp/>}/>
        <Route path='production' element={<ProductionComp/>}/>
        <Route path='setup' element={<SetupComp/>}/>
        <Route path='Product' element={<ProductListComp/>}/>
        <Route path='productlist' element={<ProductListComp/>}/>
        <Route path='partlist' element={<PartListComp/>}/>
        <Route path='rawmateriallist' element={<RawMaterialListComp/>}/>
        <Route path='machinelist' element={<MachineListComp/>}/>
        <Route path='vendors' element={<VendorComp/>}/>
        <Route path='cpm' element={<CpmComp/>}/>
       
      </Routes>

      
      
  
      
      <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-white">
  
    <div class="text-black mb-3 mb-md-0 ">
      Optisync Copyright © 2023. All rights reserved.
    </div>
    
   
   
  </div>
      
</div>
);
}
export default App;
