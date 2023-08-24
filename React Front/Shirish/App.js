import logo from './logo.svg';
import './App.css';
import LoginComponent from './Components/loginComponent';
import { Route, Routes , Link } from 'react-router-dom';
/* import Regitrstion from './Components/RegistrationComponent';
 */
import HomeComponent from './Components/HomeComponent';
/* import image from './IMG1.jpg'; */
import Manager from './Components/ManagerComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import AdminComp from './Components/AdminComponent';
import VendorComp from './Components/VendorComponent';
import ProductionComp from './Components/ProductionComponent';
import StoreComp from './Components/StoreComponent';
import QualityAssemblyComp from './Components/QualityAssemblyComponent';
import PaymentComp from './Components/PaymentComponent';
import Register from './Components/Registration';
import Plan from './Components/plan';
import { useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import Submit from './Components/SubmitComp';
import RegisrationRequest from './Components/PaymentComponent';
import PendingReq from './Components/PendingReq';
import Loginsidconfirm from './Components/Loginsidconfirm';




function App() {


  const mystate = useSelector((state)=>state.logged);
  
  return (
    <div className="App">
      
      <h1 className='bg-primary'>Welcome to OptiSync</h1>
         <nav className="navbar navbar-expand-sm bg-light mb-3">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Home" className="nav-link px-3"> Home </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link px-3"> Login </Link>
              </li>
              <li className="nav-item">
                <Link to="/Registration" className="nav-link px-3"> Registration </Link>
              </li>
               <li className="nav-item">
                <Link to="/Plan" className="nav-link px-3"> Plan </Link>
              </li>

              <li className="nav-item">
                <Link to="/Admin" className="nav-link px-3"> Admin </Link>
              </li>
              
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Modules</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Manager</a></li>
                    <li><a class="dropdown-item" href="#">Store</a></li>
                    <li><a class="dropdown-item" href="#">Production</a></li>
                    <li><a class="dropdown-item" href="#">Vendor</a></li>
                    <li><a class="dropdown-item" href="#">Assembly & Quality</a></li>
                    <li><a class="dropdown-item" href="#">Dispatch</a></li>
                    
                  </ul>
                </li>
            </ul>
          </div>
         </nav>
         
        <Routes>
          <Route path='/Home' element={<HomeComponent/>}></Route>
          <Route path='/Login' element={<LoginComponent/>}></Route>
          
          <Route path='/Manager' element={<Manager/>}></Route>
          <Route path='/Admin' element={<AdminComp/>}></Route>
          <Route path='/Vendor' element={<VendorComp/>}></Route>
          <Route path='/Production' element={<ProductionComp/>}></Route>
          <Route path='/Store' element={<StoreComp/>}></Route>
          <Route path='/QualityAssembly' element={<QualityAssemblyComp/>}></Route>
          <Route path='/Registration' element={<Register />}></Route>
          <Route path='pendingrequest' element={<PendingReq/>}/>
          <Route path='/Plan' element={<Plan />}></Route>
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/Loginsid' element={<Loginsidconfirm />}></Route>

        </Routes>

       
      
    </div>
  );
}

export default App;
