import React, { useState ,useReducer } from "react";

export default function CpmComp()
{
    const initialState={
        store_ct:"",
        production_ct:"",
        vendor_ct:"",
        assembly_ct:"",
        dispatch_ct:""
          
      }
    
    const reducer = (state, action) => {
      switch(action.type) {
           case 'update':
              return {...state, [action.fld]:action.val }
           case 'reset':
              return initialState
      }
    
    }
    
    const[formData, dispatch] = useReducer(reducer , initialState );
    
    const sendData = (e) => {
      e.preventDefault();
    
      const reqOption = {
       method:'POST',
       headers:{'content-type':'application/json'},
       body: JSON.stringify(formData)
      }
    
      fetch("http://localhost:8080/saveCPM",reqOption)
      .then(resp => {if(resp.ok)
       return resp.text();
      else
       throw new Error("server error");
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .catch((Error)=>alert("server error . try again later")) 
      console.log(formData) 
    }
    
    return (
        <div>
          <h1>CPM Details</h1>
          <div className="mb-2">
            <div className="form-row">
              <label htmlFor="store_ct">Store CT:</label>
              <input type="number" name="store_ct" className="form-control" id="store_ct" value={formData.store_ct}
              onChange={(e)=>{dispatch({type:'update',fld:'store_ct',val:e.target.value})}} required />
                     
            </div>

            
    
            <div className="mb-2">
              <label htmlFor="production_ct">Production CT:</label>
              <input type="number" name="production_ct" className="form-control" id="production_ct"  value={formData.production_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'production_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="vendor_ct">Vendor CT:</label>
              <input type="number" name="vendor_ct" className="form-control" id="vendor_ct"  value={formData.vendor_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'vendor_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="assembly_ct">Assembly CT:</label>
              <input type="number" name="assembly_ct" className="form-control" id="assembly_ct"  value={formData.assembly_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'assembly_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="dispatch_ct">Dispatch CT:</label>
              <input type="number" name="dispatch_ct" className="form-control" id="dispatch_ct"  value={formData.dispatch_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'dispatch_ct',val:e.target.value})}} required />
             
            </div>
          </div>
    
          <div className="submit-button-container">
                <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
                <button type="reset"  onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
          </div>
    
    <p>{JSON.stringify(formData)}</p>
        </div>
    )
}