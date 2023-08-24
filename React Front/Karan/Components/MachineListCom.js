import React, { useState ,useReducer } from "react";

export default function MachineListComp() {
  const initialState={
    product_name:"",
    product_description:""  
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

  fetch("http://localhost:8080/saveMachine",reqOption)
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
      <h1>Machine Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="machine_name">Machine name:</label>
          <input type="text" name="machine_name" className="form-control" id="machine_name" value={formData.machine_name}
          onChange={(e)=>{dispatch({type:'update',fld:'machine_name',val:e.target.value})}} required />
                 
        </div>

        <div className="mb-2">
          <label htmlFor="machine_description">Description:</label>
          <input
            type="textarea"
            name="machine_description"
            className="form-control"
            id="machine_description"
            value={formData.machine_description}
                    onChange={(e)=>{dispatch({type:'update',fld:'machine_description',val:e.target.value})}} required />
         
        </div>
      </div>

      <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
            <button type="reset"  onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
          </div>

<p>{JSON.stringify(formData)}</p>
    </div>
  );
}
