import React, { useState ,useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RawMaterialListComp() {
  const initialState={
    name:"",
    description:""  
  }
  const [partData, setPart] = useState([]);
  const navigate=useNavigate();

  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id

      useEffect(()=>{
        fetch(`http://localhost:8080/getallpartbyid?id=`+id)
          .then(response => response.json())
          .then(partData => setPart(partData));
          console.log(partData) 
      },[]);


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
  navigate('/Setup');
}

  return (
    <div>
      <h1>RawMaterial Details</h1>
      <div>
      <label htmlFor="name">Part Name:</label>
      <select name="part_id" className="form-select" id="part_id"
                onChange={(e)=>{dispatch({type:'update',fld:'part_id',val:e.target.value})}}>
                    <option value="option selected">Part Name</option>
                    {
                         partData.map(v => {
                             return (<option key={v.part_id} value={v.part_id} > {v.part_name} </option>
                             );
                         })
                     }
         </select>
      </div>
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
