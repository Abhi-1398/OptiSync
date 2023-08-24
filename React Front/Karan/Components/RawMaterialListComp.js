import React, { useState ,useReducer } from "react";

export default function RawMaterialListComp() {
  const initialState={
    name:"",
    description:""  
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

  fetch("http://localhost:8080/saverawmaterial",reqOption)
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
      <h1>RawMaterial Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="name">RawMaterial name:</label>
          <input type="text" name="name" className="form-control" id="name" value={formData.name}
          onChange={(e)=>{dispatch({type:'update',fld:'name',val:e.target.value})}} required />
                 
        </div>

        <div className="mb-2">
          <label htmlFor="description">Description:</label>
          <input
            type="textarea"
            name="description"
            className="form-control"
            id="description"
            value={formData.description}
                    onChange={(e)=>{dispatch({type:'update',fld:'description',val:e.target.value})}} required />
         
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
