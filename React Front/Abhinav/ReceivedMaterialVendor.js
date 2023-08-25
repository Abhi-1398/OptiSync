import React, { useState ,useReducer, useEffect } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling
import { useNavigate } from "react-router-dom";

export default function ReceivedMaterialVendor() {
  const initialState={
    PartName: "",
    PartQty: 0,
   }
  //needed by useReducer - 
  const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.val }
         case 'reset':
            return initialState
    }
  
  }
  const sendData = (e) => {
    e.preventDefault();

    const reqOption = {
     method:'POST',
     headers:{'content-type':'application/json'},
     body: JSON.stringify(formData)
    }

    fetch("http://localhost:8080/savePart",reqOption)
    .then(resp => {if(resp.ok)
     return resp.text();
    else
     throw new Error("server error");
    })
    .then(text => text.length ? JSON.parse(text) : {})
    .catch((Error)=>alert("server error . try again later")) 
    console.log(formData) 
}

const[formData, dispatch] = useReducer(reducer , initialState );

const[part,setPart] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/getAllParts`)
      .then(response => response.json())
      .then(partdata => setPart(partdata));
      console.log(part)      
},[]);

const navigate = useNavigate();
const handleGoBack=() =>{
  navigate("/Store")
}

  return (
    <div className="center-content">
      <h2>Part received from vendor</h2>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="PartName" className="form-label" >PartName:</label>
                </td>
                <td>
                <select name="PartName" className="form-select" id="PartName"
                onChange={(e)=>{dispatch({type:'update',fld:'PartName',val:e.target.value})}}  >
                      <option selected>Select Part</option>
                     {
                         part.map(v => {
                             return (<option key={v.part_id} value={v.part_id} > {v.part_name} </option>
                             );
                         })
                     }
                </select>
                </td>
              </tr>

              <tr>
                  <td>
                    <label htmlFor="PartQty" className="form-label" >Part Quantity:</label>
                  </td>
                <td>
                  <input type="number" id="PartQty" name="PartQty" value={formData.productQty}
                    onChange={(e)=>{dispatch({type:'update',fld:'PartQty',val:e.target.value})}} required />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
            <button type="reset"  onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        </form>
      </div>
      <p>{JSON.stringify(formData)}</p>
     
    </div>
    
  );
}