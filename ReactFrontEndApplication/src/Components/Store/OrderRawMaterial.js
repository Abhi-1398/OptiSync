import React, { useState ,useReducer, useEffect } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling
import { useNavigate } from "react-router-dom";

export default function OrderRawMaterial() {


  const data = JSON.parse(localStorage.getItem("loggedUser")).company.company_name;
  const id = JSON.parse(localStorage.getItem("loggedUser")).company.company_id;

  const initialState={
    company_id:id,
    raw_material_id:0,
    raw_material_qty:0,
    stock_date:new Date().toJSON().slice(0,10)
   }

  const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.val }
         case 'reset':
            return initialState
    }
  
  }

  const [successMessage, setSuccessMessage] = useState("");


  const sendData = (e) => {
    e.preventDefault();

    const reqOption = {
     method:'POST',
     headers:{'content-type':'application/json'},
     body: JSON.stringify(formData)
    }

    fetch("http://localhost:8080/saveRawOnlyMaterialInStock",reqOption)
    .then(resp => {if(resp.ok){
     return resp.text();
    }
    else
    {
      console.log(formData) 
     throw new Error("server error");
    }
    })
    .then((text) => {
      if (text.length) {
        // If data submission was successful
        setSuccessMessage("order succsessfully submited");
      }
      return text;
    })
    .catch((Error)=>alert("server error . try again later")) 
    console.log(formData) 
}

const[formData, dispatch] = useReducer(reducer , initialState );


const [RawMaterial, setRawMaterial] = useState([]);
useEffect(()=>{
  fetch(`http://localhost:8080/getrawmaterial`)
  .then(response => response.json())
  .then(RawMaterialData => setRawMaterial(RawMaterialData));
    console.log(RawMaterial) 
},[]);
const navigate = useNavigate();
const handleGoBack=() =>{
  navigate("/Store")
}
  return (
    <div className="center-content">
       <h5 style={{backgroundColor:"green"}}>Company: {data}</h5>
      <h2>Order Raw Material</h2>
      <h2>{successMessage && (
          <p style={{ color: "green", fontSize: "20px" }}>{successMessage}</p>
        )}</h2>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              
              <tr>
                <td>
                  <label htmlFor="raw_material_id" className="form-label" >RawMaterial name:</label>
                </td>
                <td>
                <select name="raw_material_id" className="form-select" id="raw_material_id"
                onChange={(e)=>{dispatch({type:'update',fld:'raw_material_id',val:e.target.value})}}  >
                      <option selected>Select RawMaterial</option>
                     {
                         RawMaterial.map(z => {
                             return (<option key={z.raw_material_id} value={z.raw_material_id} > {z.name} </option>
                             );
                         })
                     }
                </select>                  
                </td>
                <td>
                  <label htmlFor="raw_material_qty" className="form-label" >RawMaterial Quantity:</label>
                </td>
                <td>
                  <input type="number" id="raw_material_qty" name="raw_material_qty" value={formData.raw_material_qty}
                    onChange={(e)=>{dispatch({type:'update',fld:'raw_material_qty',val:e.target.value})}} required />
                </td>
              </tr>
              <tr>
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
      {/*<p>{JSON.stringify(formData)}</p> */}
     
    </div>
    
  );
}
