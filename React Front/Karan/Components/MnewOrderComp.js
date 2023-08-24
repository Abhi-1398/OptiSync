import React from "react";

function NewOrder(){
    return(
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
      
    )
}
export default NewOrder;