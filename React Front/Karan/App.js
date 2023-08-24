import logo from './logo.svg';
import './App.css';
import HelloCls from './Components/HelloCls';
import HelloFun from './Components/HelloFun';
import ComplexComp from './Components/ComplexCom';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import LoginComp from './Components/LoginComp';
import RegistrationComp from './Components/RegistrationComp';
import'bootstrap/dist/css/bootstrap.min.css';
import HomeComp from './Components/HomeComp'
import Manager from './Components/ManagerComp';

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
          
          </li>

        </div>

      </nav>

      <Routes>
        <Route path='/' element={<HomeComp/>}/>
        <Route path='login' element={<LoginComp/>}/>
        <Route path='register' element={<RegistrationComp/>}/>

      </Routes>

      
      
  
      
      <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-white">
  
    <div class="text-black mb-3 mb-md-0 ">
      Optisync Copyright © 2023. All rights reserved.
    </div>
    
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
   
  </div>
      
</div>
);
}
export default App;
