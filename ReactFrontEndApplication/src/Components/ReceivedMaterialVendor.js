import React, { useState ,useReducer, useEffect } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling
import { useNavigate } from "react-router-dom";





export default function ReceivedMaterialVendor() {

  const data = JSON.parse(localStorage.getItem("loggedUser")).company.company_name;
  const id = JSON.parse(localStorage.getItem("loggedUser")).company.company_id;
  const initialState={
    company_id:id,
    part_id: 0,
    part_qty: 0,
    stock_date:new Date().toJSON().slice(0,10)
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

  const [successMessage, setSuccessMessage] = useState("");
  const sendData = (e) => {
    e.preventDefault();

    const reqOption = {
     method:'POST',
     headers:{'content-type':'application/json'},
     body: JSON.stringify(formData)
    }

    fetch("http://localhost:8080/savePartInStock",reqOption)
    .then(resp => {if(resp.ok){
      //alert("insertion successfull");
     return resp.text();
    }
    else
     throw new Error("server error");
    })
    .then((text) => {
      if (text.length) {
        // If data submission was successful
        setSuccessMessage("part received successfully");
      }
      return text;
    })
    //.then(text => text.length ? JSON.parse(text) : {})
    .catch((Error)=>alert("server error . try again later")) 
    console.log(formData) 
}

const[formData, dispatch] = useReducer(reducer , initialState );

const[part,setPart] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/getPart`)
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
      <h5 style={{backgroundColor:"green"}}>Company: {data}</h5>
      <h2>Part received from vendor</h2>
      <h3>{successMessage && (
          <p style={{ color: "green", fontSize: "20px" }}>{successMessage}</p>
        )}</h3>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="part_id" className="form-label" >PartName:</label>
                </td>
                <td>
                <select name="part_id" className="form-select" id="part_id"
                onChange={(e)=>{dispatch({type:'update',fld:'part_id',val:e.target.value})}}  >
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
                    <label htmlFor="part_qty" className="form-label" >Part Quantity:</label>
                  </td>
                <td>
                  <input type="number" id="part_qty" name="part_qty" value={formData.part_qty}
                    onChange={(e)=>{dispatch({type:'update',fld:'part_qty',val:e.target.value})}} required />
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
      {/*<p>{JSON.stringify(formData)}</p> */}
     
    </div>
    
  );
}