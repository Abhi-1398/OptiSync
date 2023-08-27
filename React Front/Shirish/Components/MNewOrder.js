import React, { useState ,useReducer, useEffect } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling
import { useNavigate } from "react-router-dom";

export default function NewOrder() {
  const navigate = useNavigate();
    const navigateToHome=()=>{navigate("/Manager")}
  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id;
  const initialState={
    clientId: 0,
    companyId: id,
    productId: 0,
    productQty: 0,
    startDate:"",
    endDate:""
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
    .then((text) => {
      if (text.length) {
        // If data submission was successful
        setSuccessMessage("New Order Has Been Placed Successfully");
      }
      return text;
    })
    .catch((Error)=>alert("server error . try again later")) 
}
const [successMessage, setSuccessMessage] = useState("");
const[formData, dispatch] = useReducer(reducer , initialState );

// to retrive all clients
const [client,setClient] = useState([]);

 useEffect(()=>{
    fetch(`http://localhost:8080/getClient`)
    .then(resp=>resp.json())
    .then(obj=>setClient(obj))
},[]);

//to retrive Product details
const [productData, setProduct] = useState([]);
useEffect(()=>{
  fetch(`http://localhost:8080/getallproductbyid?id=${id}`)
  .then(response => response.json())
  .then(productData => setProduct(productData));
  console.log(productData) 
},[]);
  return (
    <div className="center-content">
      <h2>Place New Order</h2>
      <div className="form-container">
      {successMessage && (
          <p style={{ color: "green", fontSize: "24px" }}>{successMessage}</p>
        )}
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="clientId" className="form-label" >Client Name:</label>
                </td>
                <td>
                <select name="clientId" className="form-select" id="clientId"
                onChange={(e)=>{dispatch({type:'update',fld:'clientId',val:e.target.value})}}  >
                      <option selected>Select Client</option>
                     {
                         client.map(v => {
                             return (<option key={v.client_id} value={v.client_id} > {v.client_name} </option>
                             );
                         })
                     }
                </select>
        
                </td>
               
              </tr>
              <tr>
                <td>
                  <label htmlFor="productId" className="form-label" >Product ID:</label>
                </td>
                <td>
                <select name="productId" className="form-select" id="productId"
                onChange={(e)=>{dispatch({type:'update',fld:'productId',val:e.target.value})}}  >
                      <option selected>Select Product</option>
                     {
                         productData.map(z => {
                             return (<option key={z.product_id} value={z.product_id} > {z.product_name} </option>
                             );
                         })
                     }
                </select>
                  

                  {/*
                    <input type="number" id="productId" name="productId" value={formData.productId}
                    onChange={(e)=>{dispatch({type:'update',fld:'productId',val:e.target.value})}} required/>
                  */}
                  
                </td>
                <td>
                  <label htmlFor="productQty" className="form-label" >Order Quantity:</label>
                </td>
                <td>
                  <input type="number" id="productQty" name="productQty" value={formData.productQty}
                    onChange={(e)=>{dispatch({type:'update',fld:'productQty',val:e.target.value})}} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="startDate" className="form-label">Select start Date:</label>
                </td>
                <td>
                  <input type="date" id="startDate" name="startDate" value={formData.startDate}
                    onChange={(e)=>{dispatch({type:'update',fld:'startDate',val:e.target.value})}} required/>
                </td>
                <td>
                  <label htmlFor="endDate" className="form-label" >Select end Date:</label>
                </td>
                <td>
                  <input type="date" id="endDate" name="endDate" value={formData.endDate}
                    onChange={(e)=>{dispatch({type:'update',fld:'endDate',val:e.target.value})}} required />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button> &nbsp;&nbsp;
            <button type="reset"  onClick={()=>{dispatch({type:'reset'}) ; setSuccessMessage("");}}>Clear</button>
          </div>
        </form>
      </div>

      <br/>
      <button type="button" className="btn btn-primary" onClick={navigateToHome}>Home</button>

      
     
    </div>
    
  );
}