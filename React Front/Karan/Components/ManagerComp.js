import React from "react";
import { Route , Routes ,BrowserRouter , Link ,Router} from "react-router-dom";
import NewOrder from "./MnewOrderComp";

let ManagerComp = () => {
  
    return (
      <div class container>
        <div class= 'row'>
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
                    <a className="nav-link" href="neworder" onClick={<NewOrder/>}>
                    New Order
                    </a>
                  </li>
        
                
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Check Status
                    </a>
                  </li>
        
                
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    Department
                    </a>
                  </li>
        
            
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Approvals
                    </a>
                  </li>
        
                  {/* Quality Link */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
        
                  
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Confirm Dispatch
                    </a>

                  </li>
                  <li className="nav-item">
                        <a className="nav-link" href="#">
                        Password Recovery
                        </a>
                        </li>
                </ul>
              </div>

        </nav>
              
            <div class="col-md-8">
              <h3 class> New Order </h3>
            <div class="row">
            <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">Product Name</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">Raw Material</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">part Name</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>                    
                    </div>
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="input-group">
                      
                      <label htmlFor="password">Description: 
                      </label>
                      
                      <textarea class="form-control wd-50" aria-label="With textarea"></textarea>
                    </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck"/>
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
          
        </div>
        
        </div>
        </div>
        </div>
        </div>
 
  );
};

export default ManagerComp;