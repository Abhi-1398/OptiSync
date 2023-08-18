
import './App.css';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/loginComponent';
import Manager from './components/ManagerComponent';
import Registration from './components/RegistrationComponent';
import { Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
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
                <Link to="/Registration" className="nav-link px-3"> Company Registration </Link>
              </li>
              <li className="nav-item">
                <Link to="/Manager" className="nav-link px-3"> Manager </Link>
              </li>
            </ul>
          </div>
         </nav>
         
        <Routes>
          <Route path='/Home' element={<HomeComponent/>}></Route>
          <Route path='/Login' element={<LoginComponent/>}></Route>
          <Route path='/Registration' element={<Registration/>}></Route>
          <Route path='/Manager' element={<Manager/>}></Route>
        </Routes>

       
      
    </div>
  );
}

export default App;