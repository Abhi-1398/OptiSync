import React, { useState ,useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";






export default  function ForwardMaterial()
{

  const id = JSON.parse(localStorage.getItem("loggedUser")).company_id;
const data = JSON.parse(localStorage.getItem("loggedUser")).company.company_name;

    const initialState={
        order_id:0,
        company_id:id,
        forward_id: 0,
        qty: 0,
        raw_material_id:0,
        part_id:0,
        store_date:new Date().toJSON().slice(0,10)
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
      const [successMessage, setSuccessMessage] = useState("");

      const sendData = (e) => {
        e.preventDefault();
    
        const reqOption = {
         method:'POST',
         headers:{'content-type':'application/json'},
         body: JSON.stringify(formData)
        }
    
        fetch("http://localhost:8080/saveStore",reqOption)
        .then(resp => {if(resp.ok){
          //alert("forwarded successfully");
         return resp.text();
        }
        else
         throw new Error("server error");
        })
        .then((text) => {
          if (text.length) {
            // If data submission was successful
            setSuccessMessage("material Successfully forwarded to selected department");
          }
          return text;
        })
        .catch((Error)=>alert("server error . try again later")) 
        console.log(formData) 
    }

    const[part,setPart] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/getPart`)
      .then(response => response.json())
      .then(partdata => setPart(partdata));
      console.log(part)      
},[]);

    const [RawMaterial, setRawMaterial] = useState([]);
useEffect(()=>{
  fetch(`http://localhost:8080/getrawmaterial`)
  .then(response => response.json())
  .then(RawMaterialData => setRawMaterial(RawMaterialData));
    console.log(RawMaterial) 
},[]);

    const[order,setOrder] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/getOrders`)
      .then(response => response.json())
      .then(orderdata => setOrder(orderdata));
      console.log(order)      
},[]);

    const[forward,setForward] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8080/getAllForward`)
          .then(response => response.json())
          .then(data => setForward(data));
          console.log(forward)      
    },[]);

    const navigate = useNavigate();
    const handleGoBack=() =>{
      navigate("/Store")
    }

    return(
  <div className="center-content">
     <h5 style={{backgroundColor:"green"}}>Company: {data}</h5>
      <h2>Forward Material</h2>
      <h3>{successMessage && (
          <p style={{ color: "green", fontSize: "20px" }}>{successMessage}</p>
        )}</h3>
      <div className="form-container">
        <form >
          <table>
            <tbody>
                 <tr>
                <td>
                  <label htmlFor="order_id" className="form-label" >order_id :</label>
                </td>
                <td>
                <select name="order_id" className="form-select" id="order_id"
                onChange={(e)=>{dispatch({type:'update',fld:'order_id',val:e.target.value})}}>
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
                  <label htmlFor="forward_id" className="form-label" >Departmant:</label>
                </td>
                <td>
                <select name="forward_id" className="form-select" id="forward_id"
                onChange={(e)=>{dispatch({type:'update',fld:'forward_id',val:e.target.value})}}  >
                      <option selected>Select Departmant</option>
                     {
                         forward.map(v => {
                             return (<option key={v.forward_id} value={v.forward_id} > {v.forward_name} </option>
                             );
                         })
                     }
                </select>
                </td>
              </tr>
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

              <td>
                  <label htmlFor="raw_material_id" className="form-label" >RawMaterial name:</label>
                </td>
                <td>
                <select name="raw_material_id" className="form-select" id="raw_material_id"
                onChange={(e)=>{dispatch({type:'update',fld:'raw_material_id',val:e.target.value})}}>
                     <option selected>Select Raw Material</option>
                     {
                         RawMaterial.map(z => {
                             return (<option key={z.raw_material_id} value={z.raw_material_id} > {z.name} </option>
                             );
                         })
                     }
                </select>                  
                </td>

              <tr>
                  <td>
                    <label htmlFor="qty" className="form-label" >Quantity:</label>
                  </td>
                <td>
                  <input type="number" id="qty" name="qty" value={formData.qty}
                    onChange={(e)=>{dispatch({type:'update',fld:'qty',val:e.target.value})}} required />
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
    )
}
