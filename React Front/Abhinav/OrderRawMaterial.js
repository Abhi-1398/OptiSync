import React, { useState ,useReducer, useEffect } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling
import { useNavigate } from "react-router-dom";

export default function OrderRawMaterial() {
  const initialState={
    OrderId: 0,
    rawMaterailId: 0,
    RawMaterialQty: 0,
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

    fetch("http://localhost:8080/saveOrder",reqOption)
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

const[order,setOrder] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/getAllOrders`)
      .then(response => response.json())
      .then(orderdata => setOrder(orderdata));
      console.log(order)      
},[]);

//to retrive Product details
const [RawMaterial, setRawMaterial] = useState([]);
useEffect(()=>{
  fetch(`http://localhost:8080/getAllMaterial`)
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
      <h2>Order Raw Material</h2>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="OrderId" className="form-label" >OrderId :</label>
                </td>
                <td>
                <select name="OrderId" className="form-select" id="OrderId"
                onChange={(e)=>{dispatch({type:'update',fld:'OrderId',val:e.target.value})}}  >
                      <option selected>Select Order</option>
                     {
                         order.map(v => {
                             return (<option key={v.order_id} value={v.order_id} > {v.order_id} </option>
                             );
                         })
                     }
                </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="rawMaterailId" className="form-label" >RawMaterial ID:</label>
                </td>
                <td>
                <select name="rawMaterailId" className="form-select" id="rawMaterailId"
                onChange={(e)=>{dispatch({type:'update',fld:'rawMaterailId',val:e.target.value})}}  >
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
                  <label htmlFor="RawMaterialQty" className="form-label" >RawMaterial Quantity:</label>
                </td>
                <td>
                  <input type="number" id="RawMaterialQty" name="RawMaterialQty" value={formData.RawMaterialQty}
                    onChange={(e)=>{dispatch({type:'update',fld:'RawMaterialQty',val:e.target.value})}} required />
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
      <p>{JSON.stringify(formData)}</p>
     
    </div>
    
  );
}