import logo from './logo.svg';
import './App.css';
import LoginComponent from './Components/loginComponent';
import { Route, Routes , Link } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import Manager from './Components/ManagerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdminComp from './Components/AdminComponent';
import StoreComp from './Components/StoreComponent';
import QualityAssemblyComp from './Components/QualityAssemblyComponent';
import PaymentComp from './Components/PaymentComponent';
import Plan from './Components/plan';
import { useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import Submit from './Components/SubmitComp';
import RegisrationRequest from './Components/PaymentComponent';
import PendingReq from './Components/PendingReq';
import Loginsidconfirm from './Components/Loginsidconfirm';
import Register from './Components/RegistrationComponent';
import Logout from './Components/LogoutComp';
import NewOrder from './Components/MNewOrder';
import Checkstatus from './Components/Manager_CheckStatus';
import SetupComp from './Components/SetupComp';
import ProductListComp from './Components/ProductListComp';
import PartListComp from './Components/PartListComp';
import RawMaterialListComp from './Components/RawMaterialListComp';
import MachineListComp from './Components/MachineListCom';
import CpmComp from './Components/CpmComp';
import ForgetpassComp from './Components/ForgetpassComp';
import ReceivedMaterialVendor from './Components/ReceivedMaterialVendor';
import OrderRawMaterial from './Components/OrderRawMaterial';
import VendorComp from './Components/VendorComp';
import DispatchComp from './Components/DispatchComponent';
import DispatchReceivedQty from './Components/DispatchReceivedQty';
import DPlanTask from './Components/DPlanTask';
import FinalDispatch from './Components/FinalDispatch';
import ForwardMaterial from './Components/ForwardMaterail';
import ProductionComp from './Components/ProductionComp';
import DailyTask from './Components/PNewTask';
import Forgetpassbymanager from './Components/Forgetpassbymanager';
import Forgetpassbyadmin from './Components/Forgetpassbyadmin';
import CheckS from './Components/CheckS';
import Checkcompanystatus from './Components/Checkcompanystatus';
import AssemblyQA from './Components/A&QAComponent';
import AandQAReceivedQty from './Components/A&QAReceivedQty';
import AandQAPlanTask from './Components/A&QAPlanTask';
import AQAForwardProduct from './Components/A&QAForwardProduct';

function App() {


  const mystate = useSelector((state)=>state.logged);
  
  return (
    <div className="App">
      
      <h1 className='bg-primary'>Welcome to OptiSync</h1>
      <div style={{display:mystate.loggedIn?"none":"block"}}>
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
                <Link to="/Plan" className="nav-link px-3"> Registration </Link>
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
         </div>
         
        <Routes>
          <Route path='/Home' element={<HomeComponent/>}></Route>
          <Route path='/Login' element={<LoginComponent/>}></Route>
          <Route path='/Manager' element={<Manager/>}></Route>
          <Route path='/Admin' element={<AdminComp/>}></Route>
    
          <Route path='/Production' element={<ProductionComp/>}></Route>
          <Route path='/Store' element={<StoreComp/>}></Route>
          <Route path='/Assembly' element={<AssemblyQA/>}></Route>
          <Route path='/Registration' element={<Register />}></Route>
          <Route path='pendingrequest' element={<PendingReq/>}/>
          <Route path='/Plan' element={<Plan />}></Route>
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/Loginsid' element={<Loginsidconfirm />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='neworder' element={<NewOrder/>}/>
          <Route path='checkstatus' element={<Checkstatus/>}></Route>
          <Route path='setup' element={<SetupComp/>}/>
          <Route path='productlist' element={<ProductListComp/>}/>
                    <Route path='partlist' element={<PartListComp/>}/>
                    <Route path="rawmateriallist" element={<RawMaterialListComp/>}/>
                    <Route path="machinelist" element={<MachineListComp/>}/>
                     <Route path="vendors" element={<VendorComp/>}/>
 
                    <Route path="cpm" element={<CpmComp/>}/>
                    <Route path="forgetpass" element={<ForgetpassComp/>}/>
                    <Route path='Store' element={<StoreComp/>}/>
                    <Route path='ReceivedMaterialVendor' element={<ReceivedMaterialVendor/>}/>
           <Route path='OrderRawMaterial' element={<OrderRawMaterial/>}/> 
           <Route path='checkstatus' element={<Checkstatus/>}/>
           <Route path='Dispatch' element={<DispatchComp/>}/>
           <Route path='receivedp' element={<DispatchReceivedQty/>}/>
             <Route path='plantaskD' element={<DPlanTask/>}/>
             <Route path='finalD' element={<FinalDispatch/>}></Route>
             <Route path='forwardMaterial' element={<ForwardMaterial/>}></Route>
             <Route path='DailyTask' element={<DailyTask/>}/>
             <Route path='approvedpassword' element={<Forgetpassbymanager/>}></Route>
             <Route path='forgetbyadmin' element={<Forgetpassbyadmin/>}></Route>
             <Route path='checks' element={<CheckS/>}></Route>
             <Route path='checkcompany' element={<Checkcompanystatus/>}></Route>
             <Route path='receivedp' element={<AandQAReceivedQty/>}/>
    
    <Route path='plantaskAQA' element={<AandQAPlanTask/>}/>
   <Route path="forwordToD" element={<AQAForwardProduct/>}/>

        </Routes>  

    </div>
  );
}

export default App;